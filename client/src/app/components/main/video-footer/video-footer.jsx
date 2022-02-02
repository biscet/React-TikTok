import React, { Fragment } from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

import './video-footer.scss'

export default function VideoFooter({ channel, description, song }) {
  return (
    <div className='video-footer'>
      <div className='video-footer--text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='video-footer--ticker'>
          <MusicNoteIcon className='video-footer--icon' />
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
