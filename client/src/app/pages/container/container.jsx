import React, { useEffect, useState, useRef, useMemo } from 'react'
import clsx from 'clsx'

import { subData, recData } from '@entities/data.js'
import axios from '@utils/requester'
import { Video, Header, Footer } from '@app/components/container'
import Loading from '@pages/loading/loading'
import './container.scss'

export default function Container() {
  //Массив с видео роликами
  const [videos, setVideos] = useState(null)
  const [typeVideos, setTypeVideos] = useState(true)

  //Направление и высота скролла, нужна для логики проигрывания видео
  const [scroll, setScroll] = useState(0)
  const [goingUp, setGoingUp] = useState(false)

  const prevScrollY = useRef(0)
  const containerRef = useRef(null)

  //Принятие данных с сервера
  useEffect(() => {
    //Перематывание страницы на 1 видео после перезагрузки
    containerRef.current.scrollTop = 0

    if (typeVideos) {
      setVideos(recData)
    } else {
      setVideos(subData)
    }
  }, [typeVideos])

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

  //Логика отображения страничек приложения
  const [tabType, setTabType] = useState('Главная')

  const appRender = [
    {
      type: 'Главная',
      component: (key) => <LentaRender key={key} videos={videos} scroll={scroll} goingUp={goingUp} />
    },
    {
      type: 'Интересное',
      component: (key) => <InterestLentaRender key={key} />
    },
    {
      type: '',
      component: (key) => <AddVideoRender key={key} />
    },
    {
      type: 'Входящие',
      component: (key) => <MessagesRender key={key} />
    },
    {
      type: 'Я',
      component: (key) => <PersonalRender key={key} />
    }
  ]

  return (
    <div className='app-videos' ref={containerRef} onScroll={onScroll}>
      {videos ? (
        <React.Fragment>
          {tabType === 'Главная' && <Header type={typeVideos} setType={setTypeVideos} setVideos={setVideos} />}
          {appRender.map((item, key) => item.type === tabType && item.component(key))}
          <Footer setTabType={setTabType} />
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  )
}

const LentaRender = ({ videos, scroll, goingUp }) => {
  return videos.map((video, key) => (
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
  ))
}

const InterestLentaRender = () => {
  return <div style={{ color: 'white' }}>Интересное</div>
}

const AddVideoRender = () => {
  return <div style={{ color: 'white' }}>Добавить видео</div>
}

const MessagesRender = () => {
  return <div style={{ color: 'white' }}>Входящие</div>
}

const PersonalRender = () => {
  return <div style={{ color: 'white' }}>Я</div>
}

// async function fetchPosts() {
//   const response = await axios.get('/v2/posts')
//   setVideos(response.data)
//   return response
// }

// fetchPosts()
