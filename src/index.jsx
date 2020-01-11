import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-58VMN44',
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<App />, document.getElementById('root'))
