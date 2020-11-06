import React from 'react'
import { Provider } from 'react-redux'

import store from './src/redux/store'

// import Main
import Main from './src/screens/Main'

export default function App () {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
