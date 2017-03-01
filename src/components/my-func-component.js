import React from 'react'

//Stateless Components -----third way (How Tom prefers) -----
const MyFuncComponent = props => {
  return (
    <h1 className={props.color}>
      <span>{props.titleText}</span>
    </h1>
  )
}


export default MyFuncComponent
