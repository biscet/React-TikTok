import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './video-sidebar.scss'

export default function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false)

  //Разделение больших чисел
  const formatNumber = (num) => {
    const numString = num.toString()

    if (num <= 9999) return numString
    if (num <= 999999) return numString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').substr(0, numString.length - 1) + 'K'
    if (num > 999999) return numString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').substr(0, numString.length - 4) + 'M'
  }

  return (
    <div className='video-sidebar'>
      <div className='video-sidebar--button'>
        <FavoriteIcon fill={liked ? '#ee3054' : 'white'} onClick={() => setLiked(!liked)} />
        <p>{formatNumber(likes)}</p>
      </div>
      <div className='video-sidebar--button'>
        <MessageIcon />
        <p>{formatNumber(messages)}</p>
      </div>
      <div className='video-sidebar--button'>
        <ShareIcon />
        <p>{formatNumber(shares)}</p>
      </div>
    </div>
  )
}

const FavoriteIcon = ({ fill, onClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      height='36px'
      viewBox='0 0 24 24'
      width='36px'
      fill={fill}
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
    </svg>
  )
}

const ShareIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='36px' viewBox='0 0 24 24' id='share-icon' width='36px' fill='white'>
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z' />
    </svg>
  )
}

const MessageIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='message-icon'
      height='36px'
      viewBox='0 0 24 24'
      width='36px'
      fill='white'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z' />
    </svg>
  )
}

VideoSidebar.propTypes = {
  likes: PropTypes.string,
  shares: PropTypes.string,
  messages: PropTypes.string
}
