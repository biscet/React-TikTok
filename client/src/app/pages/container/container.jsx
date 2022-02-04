import React, { useEffect, useState, useRef } from 'react'

import data from '@entities/data.js'
import axios from '@utils/requester'
import { Video } from '@app/components/container'
import './container.scss'

export default function Container() {
  //Массив с видео роликами
  const [videos, setVideos] = useState(data)

  //Направление и высота скролла, нужна для логики проигрывания видео
  const [scroll, setScroll] = useState(0)
  const [goingUp, setGoingUp] = useState(false)

  const prevScrollY = useRef(0)
  const containerRef = useRef(null)

  //Принятие данных с сервера
  useEffect(() => {
    // async function fetchPosts() {
    //   const response = await axios.get('/v2/posts')
    //   setVideos(response.data)
    //   return response
    // }
    // fetchPosts()

    //Перематывание страницы на 1 видео после перезагрузки
    containerRef.current.scrollTop = 0
  }, [])

  //Отслеживание скролла и направление скролла
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
    <div className='app-videos' ref={containerRef} onScroll={onScroll}>
      {videos.map((video, key) => (
        <Video
          id={key}
          scroll={scroll}
          goingUp={goingUp}
          key={key}
          shares={video.shares}
          messages={video.messages}
          likes={video.likes}
          description={video.description}
          channel={video.channel}
          song={video.song}
          url={video.url}
        />
      ))}
      <div style={{ height: 60, width: '100%', position: 'fixed', bottom: 0 }}></div>
    </div>
  )
}
