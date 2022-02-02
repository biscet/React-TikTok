import React, { useEffect, useState, useRef } from 'react'
import _ from 'lodash'

import axios from '@utils/requester'
import { Video } from '@app/components/container'
import './container.scss'

export default function Container() {
  const [videos, setVideos] = useState([])
  const [scroll, setScroll] = useState(0)
  const [goingUp, setGoingUp] = useState(false)

  const prevScrollY = useRef(0)
  const containerRef = useRef(null)

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data)

      return response
    }

    fetchPosts()
  }, [])

  const onScroll = () => {
    const scrollTop = containerRef.current.scrollTop
    setScroll(scrollTop)

    if (prevScrollY.current < scrollTop && goingUp) {
      setGoingUp(false)
    }
    if (prevScrollY.current > scrollTop && !goingUp) {
      setGoingUp(true)
    }

    prevScrollY.current = scrollTop
  }

  return (
    <div className='app__videos' ref={containerRef} onScroll={onScroll}>
      {videos.map((video, key) => (
        <Video
          id={key}
          scroll={scroll}
          goingUp={goingUp}
          key={video._id}
          shares={video.shares}
          messages={video.messages}
          likes={video.likes}
          description={video.description}
          channel={video.channel}
          song={video.song}
          url={video.url}
        />
      ))}
    </div>
  )
}
