import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div className="counterApp">
      <h2 class="counterNumber">{this.props.count}</h2>
      <article class="buttonContainer">
      <button class="buttonMoins" onClick={this.props.substract}> - </button>
      <button class="buttonPlus" onClick={this.props.increment}> + </button>
      </article>
    </div>
    )
  }
}

export default Counter