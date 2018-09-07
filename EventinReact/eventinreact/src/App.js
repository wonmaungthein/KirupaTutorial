import React, { Component } from "react";
import "./App.css";

class PlussButton extends Component {
  render() {
    return <button onClick={this.props.clickHandler}>+</button>;
  }
}
class App extends Component {
  state = {
    counter: 0
  };

  increaseCounter = e => {
    let currentCount = this.state.counter;
    // if shift key is pressed when you click, counter will be increased by adding 10
    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }

    this.setState({ counter: currentCount });
  };

  decreaseCounter = e => {
    let currentCount = this.state.counter;
    currentCount > 0 ? this.setState({ counter: currentCount - 1 }) : "";
  };

  addTen = e => {
    let currentCount = this.state.counter;

    this.setState({
      counter: (currentCount += 10)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>{this.state.counter}</h1>
        </p>
        {/* passing increaseCounter into component as a prop. */}
        <PlussButton clickHandler={this.increaseCounter} />

        {/* This is another way of handling increaseCounter by directly putting onClick method as an attribute */}
        {/* <button onClick={this.increaseCounter}>
          <strong className="plus-sign">+</strong>
        </button> */}

        <button onClick={this.decreaseCounter}>
          <strong className="plus-sign">-</strong>
        </button>
        <button onClick={this.addTen}>Add 10</button>
      </div>
    );
  }
}

export default App;
