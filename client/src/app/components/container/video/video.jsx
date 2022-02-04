import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Range from './range-style.js'
import { VideoFooter, VideoSidebar } from '@app/components/container'
import './video.scss'

export default function Video({ url, channel, description, song, likes, messages, shares, scroll, id, goingUp }) {
  //Значения для проигрывания видео
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  //Прогресс видео
  const [progressBar, setProgrressBar] = useState(0)

  const videoRef = useRef(null)
  const audioRef = useRef(null)

  //Включить проигрывание видео
  const onChangePlay = () => {
    let autoPlayAllowedCheck = audioRef.current.play()

    //Проверка политики браузера на наличие AutoplayAllowed правила
    autoPlayAllowedCheck &&
      autoPlayAllowedCheck
        .then(() => {
          videoRef.current.play()
          setPlaying(true)

          audioRef.current.play()
          setMuted(true)
        })
        .catch(() => {
          onChangePause(true)
        })
  }

  //Выключить проигрывание видео
  const onChangePause = (clear) => {
    videoRef.current.pause()
    audioRef.current.pause()

    if (clear) {
      videoRef.current.currentTime = 0
      audioRef.current.currentTime = 0
    }

    setMuted(false)
    setPlaying(false)
  }

  //Логика автоматического проигрывания видео
  useEffect(() => {
    const windowHeight = window.innerHeight - 60

    const videoLaunchConditionUp = goingUp
      ? scroll + windowHeight > windowHeight * id && scroll < windowHeight * id + 10
      : scroll + 10 > windowHeight * id && scroll < windowHeight * id + windowHeight

    if (videoLaunchConditionUp) {
      onChangePlay()
    } else {
      onChangePause(true)
    }
  }, [scroll])

  //Пауза или Проигырвание видео по нажатию на экран
  const handleVideoPress = () => {
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)

    muted ? audioRef.current.pause() : audioRef.current.play()
    setMuted(!muted)
  }

  //Обновление времени у видео
  const handleOnTimeUpdate = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
    setProgrressBar(progress)
  }

  //Обновление времени у видео при взаимодействии с range bar
  const handleProgress = (event) => {
    const manualChange = Number(event.target.value)

    videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange
    audioRef.current.currentTime = (videoRef.current.duration / 100) * manualChange

    setProgrressBar(manualChange)
  }

  return (
    <div className='video'>
      <video
        autoPlay={playing}
        muted
        playsInline
        onTimeUpdate={handleOnTimeUpdate}
        onClick={handleVideoPress}
        loop
        className='video--player'
        ref={videoRef}
      >
        <source src={url} type='video/mp4'></source>
      </video>
      <audio className='video--audio' autoPlay={muted} onTimeUpdate={handleOnTimeUpdate} ref={audioRef} loop>
        <source src={url} type='audio/mp3'></source>
      </audio>
      <Range
        type='range'
        min='0'
        max='100'
        value={progressBar}
        className='video--input-range'
        onTouchStart={onChangePause}
        onTouchEnd={onChangePlay}
        onChange={(e) => handleProgress(e)}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string,
  channel: PropTypes.string,
  description: PropTypes.string,
  song: PropTypes.string,
  likes: PropTypes.string,
  messages: PropTypes.string,
  shares: PropTypes.string,
  scroll: PropTypes.number,
  id: PropTypes.number,
  goingUp: PropTypes.bool
}
