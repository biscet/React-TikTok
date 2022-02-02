import React from 'react'

import { Video } from '@components/main'
import './main.scss'

export default function Main() {
  return (
    <div className='app__videos'>
      {data.map((video, key) => (
        <Video
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
    </div>
  )
}

const data = [
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 2,
    messages: 14,
    likes: 435,
    description: 'Wow that react app',
    channel: 'biscet',
    song: 'eto posto ahuenno',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    shares: 5,
    messages: 34,
    likes: 232,
    description: 'Wow that react app 2',
    channel: 'biscet',
    song: 'eto posto ahuenno 13',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
]
