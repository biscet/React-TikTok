import React, { useRef, useState } from 'react'

import { VideoFooter, VideoSidebar } from '@components/main'
import './video.scss'

export default function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className='video'>
      <video onClick={handleVideoPress} loop className='video--player' ref={videoRef} src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}
