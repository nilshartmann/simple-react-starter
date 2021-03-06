import React from "react";

export default class HelloMessage extends React.Component {
  static defaultProps = {
    greeting: ""
  };

  render() {
    return (
      <div>
        <input ref={input => (this.input = input)} onChange={event => this.updateModel(event)} value={this.state.greeting} />
        {this.state.greeting && <p>{this.state.greeting}, World</p>}
        <button onClick={() => this.reset()}>Clear</button>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { greeting: this.props.greeting };
  }
  reset() {
    this.setState({ greeting: "" });
    this.input.focus();
  }
  updateModel(event) {
    this.setState({ greeting: event.target.value });
  }
}
