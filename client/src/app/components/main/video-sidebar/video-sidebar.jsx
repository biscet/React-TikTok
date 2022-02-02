import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteIBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

import './video-sidebar.scss'

export default function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className='video-sidebar'>
      <div className='video-sidebar--button'>
        {liked ? (
          <FavoriteIcon fontSize='large' onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteIBorderIcon fontSize='large' onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='video-sidebar--button'>
        <MessageIcon fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='video-sidebar--button'>
        <ShareIcon fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}
