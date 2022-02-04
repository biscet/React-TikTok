import React, { Suspense, useState, useCallback, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import { routes } from '@entities/routes'
import { Loading } from '@pages'

function App(props) {
  return (
    <div className='app'>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route, key) => (
              <Route key={key} exact={route.exact} path={route.path} render={route.render} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default hot(module)(withRouter((props) => <App {...props} />))
