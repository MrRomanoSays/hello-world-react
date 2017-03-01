import React from 'react'

 //----------old way -------
//Creating a Component so that in ReactDOM.render() we can use it like a template/constructor/cookie cutter...
var MyComponent = React.createClass({
  render: function () {
    return (
      <h1 className={this.props.color}>
        {this.props.titleText}
      </h1>
    )
  }
})


export default MyComponent
