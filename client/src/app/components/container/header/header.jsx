import React from 'react'
import clsx from 'clsx'

import './header.scss'

export default function Header({ type, setType }) {
  return (
    <div className='app-videos--type'>
      <div
        onClick={() => setType(false)}
        className={clsx('app-videos--type--subscriptions', !type && 'app-videos--type_active-subscriptions')}
      >
        Подписки
      </div>
      <div
        className={clsx(
          'app-videos--type--line',
          type && 'app-videos--type--line_animation',
          type ? 'align-recomendation' : 'align-subscriptions'
        )}
      />
      <div
        onClick={() => setType(true)}
        className={clsx('app-videos--type--recomendation', type && 'app-videos--type_active-recomendation')}
      >
        Рекомендации
      </div>
    </div>
  )
}
