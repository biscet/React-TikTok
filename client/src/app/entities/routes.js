import React, { lazy } from 'react'

import { NotFound } from '@pages'

const Main = lazy(() => import('@pages/main/main.jsx'))

export const routes = [
  { path: '/', exact: true, render: () => <Main /> },
  { path: null, exact: false, render: () => <NotFound /> }
]
