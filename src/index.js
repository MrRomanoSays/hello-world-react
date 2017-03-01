// /*
// //Much more code needed this way...
// ReactDOM.render(
//   React.createElement("h1", null, "Hello World"),
//   document.getElementById("root")
// )
// */
//
//
// /*
// Facebook decided that above was too much code...so went with this style instead...using JSX...which is a transpilation language...allows you to write html like code and will transpile that automatically into this react create element code shown above.  This style will only work after we add a transpiler.
// */
// import './app.css'
// import React from 'react'
// import ReactDOM from 'react-dom'
//
//
// //Stateless Components -----third way (How Tom prefers) -----
// const MyFuncComponent = props => {
//   return (
//     <h1 className={props.color}>
//       <span>{props.title}</span>
//     </h1>
//   )
// }
//
//
// //ES6 Class Componenet ----- newer second way --------
// class MyClassComponent extends React.Component {
//   // constructor () {
//   //   super()
//   //   this.state = { title: "Foo"}
//   // }
//   render () {
//     return (
//       <h1 className={this.props.color}>
//         <span>{this.state.title}</span>
//       </h1>
//     )
//   }
// }
//  //----------old way -------
// //Creating a Component so that in ReactDOM.render() we can use it like a template/constructor/cookie cutter...
// var MyComponent = React.createClass({
//   render: function () {
//     return (
//       <h1 className={this.props.color}>
//         {this.props.titleText}
//       </h1>
//     )
//   }
// })
// ReactDOM.render(
//   <div>
//     <h1 className="blue">Hello World</h1>
//     <h2>Goodbye</h2>
//     <hr />
//     <MyComponent color="green" titleText="Component3 - Functional...(Stateless) Way...Tom's Way" />
//     <MyComponent color="orange" titleText="Component2 - Newer Way (ES6 Class Component)" />
//     <MyComponent color="gray" titleText="Component1 - Old Way (Create Class)" />
//     <br />
//     <br />
//     <hr />
//     <footer>All rights...</footer>
//   </div>,
//   document.getElementById('root')
// )


import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
