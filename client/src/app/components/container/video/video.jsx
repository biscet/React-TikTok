import React, { useRef, useState, useEffect } from 'react'
import WheelIndicator from 'wheel-indicator'

import { VideoFooter, VideoSidebar } from '@app/components/container'
import './video.scss'

export default function Video({ url, channel, description, song, likes, messages, shares, scroll, id, goingUp }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const windowHeight = window.innerHeight

    const videoLaunchConditionUp = goingUp
      ? scroll + windowHeight > windowHeight * id && scroll < windowHeight * id + 10
      : scroll + 10 > windowHeight * id && scroll < windowHeight * id + windowHeight

    if (videoLaunchConditionUp) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setPlaying(false)
    }
  }, [scroll])

  const handleVideoPress = () => {
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
  }

  return (
    <div className='video'>
      <video
        autoPlay={playing}
        muted
        onClick={handleVideoPress}
        loop
        className='video--player'
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}
