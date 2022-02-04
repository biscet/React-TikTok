import React, { lazy } from 'react'

import { NotFound, Container } from '@pages'

//const Container = lazy(() => import('@pages/container/container.jsx'))

export const routes = [
  { path: '/', exact: true, render: () => <Container /> },
  { path: null, exact: false, render: () => <NotFound /> }
]
