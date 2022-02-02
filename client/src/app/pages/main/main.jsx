import React, { useEffect, useState } from 'react'

import axios from '@utils/requester'
import { Video } from '@components/main'
import './main.scss'

export default function Main() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data)

      return response
    }

    fetchPosts()
  }, [])

  return (
    <div className='app__videos'>
      {videos.map((video) => (
        <Video
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
