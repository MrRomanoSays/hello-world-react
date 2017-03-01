import React from 'react'
import MyFuncComponent from './components/my-func-component.js'
import MyComponent from './components/my-component.js'
import MyClassComponent from './components/my-class-component.js'

class App extends React.Component {
  render () {
    return (
      <div>
        <MyComponent titleText="My Component" />
        <MyFuncComponent titleText="My Func Component" />
        <MyClassComponent titleText="My Class Component" />
      </div>
    )
  }
}

export default App
