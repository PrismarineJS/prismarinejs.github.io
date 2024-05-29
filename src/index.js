import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from './App'

class Index extends Component {
  render () {
    return (
      <div>
        <App />
      </div>
    )
  }
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<Index />)
