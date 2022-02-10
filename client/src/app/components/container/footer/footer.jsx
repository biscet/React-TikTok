import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import './footer.scss'

const types = [
  { icon: () => <Home />, title: 'Главная' },
  { icon: () => <Interest />, title: 'Интересное' },
  { icon: () => <AddVideo />, title: '' },
  { icon: () => <Message />, title: 'Входящие' },
  { icon: () => <Profile />, title: 'Я' }
]

export default function Footer({ setTabType }) {
  const [type, setType] = useState(types && types[0].title)

  return (
    <div className='app-footer'>
      {types.map((item, key) => (
        <div
          key={key}
          onClick={() => {
            setType(item.title)
            setTabType(item.title)
          }}
          className={clsx('app-footer--link', type === item.title && 'app-footer--link_active')}
        >
          {item.icon()}
          {item.title}
        </div>
      ))}
    </div>
  )
}

Footer.propTypes = {
  setTabType: PropTypes.func
}

const Home = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='gray'
    >
      <rect fill='none' height='24' width='24' />
      <path d='M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19h-5v-4h-2v4H6v-8.9l6-4.58 l6,4.58V19z M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z' />
    </svg>
  )
}

const Interest = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='gray'>
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
    </svg>
  )
}

const AddVideo = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='32px' viewBox='0 0 24 24' width='32px' fill='white'>
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z' />
    </svg>
  )
}

const Message = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='gray'>
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
    </svg>
  )
}

const Profile = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='gray'>
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 5v14H5V5h14m0-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 10H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18zm-9.69-2h7.38c-.69-.56-2.38-1.12-3.69-1.12s-3.01.56-3.69 1.12z' />
    </svg>
  )
}
