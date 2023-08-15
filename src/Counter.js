import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handelDecrement = this.handelDecrement.bind(this);
    this.handelIncrement = this.handelIncrement.bind(this);
  }
  handelDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }
  handelIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handelDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handelIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
