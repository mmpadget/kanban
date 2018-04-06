import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <h1>Kanban</h1>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
