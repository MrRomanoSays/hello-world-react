import React from 'react'

// //ES6 Class Componenet ----- newer second way --------
 class MyClassComponent extends React.Component {
   // constructor () {
   //   super()
   //   this.state = { title: "Foo"}
   // }
   render () {
     return (
       <h1 className={this.props.color}>
         <span>{this.props.titleText}</span>
       </h1>
     )
   }
 }

export default MyClassComponent
