import React, { Fragment } from 'react'

import Ticker from 'react-ticker'
import PropTypes from 'prop-types'

import './video-footer.scss'

export default function VideoFooter({ channel, description, song }) {
  return (
    <div className='video-footer'>
      <div className='video-footer--text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='video-footer--ticker'>
          <MusicNote />
          <Ticker mode='smooth'>
            {({ index }) => (
              <Fragment>
                <p>{song}</p>
              </Fragment>
            )}
          </Ticker>
        </div>
      </div>
      <img className='video-footer--record' src='https://static.thenounproject.com/png/934821-200.png' alt='' />
    </div>
  )
}

VideoFooter.propTypes = {
  channel: PropTypes.string,
  description: PropTypes.string,
  song: PropTypes.string
}

const MusicNote = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='video-footer--icon'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='white'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
    </svg>
  )
}
