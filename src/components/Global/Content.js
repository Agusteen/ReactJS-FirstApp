import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(props) {
    super(props); //tiene acceso a this

    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    };
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this); //esto pasa el this al contexto de ese metodo
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  //hace que se ejecute el render dos veces
  componentDidMount() {
    this.setState({
      count: 1
    });
  }

  handleCountClick(e) {
    switch (e.target.id) {
      case 'add':
        this.setState({
          count: this.state.count + 1
        });
        break;
      case 'substract':
        this.setState({
          count: this.state.count - 1
        });
        break;
      case 'reset':
        this.setState({
          count: 0
        });
        break;
      default:
      break;

    }
  }

  handleResultClick(e) {
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }

  handleInputChanged(e) {
    if(e.target.id === 'number1') {
      this.setState({
        number1: Number(e.target.value)
      });
    } else {
      this.setState({
        number2: Number(e.target.value)
      });
    }

  }
  render() {
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>

        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="substract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <h2>Calculator</h2>
        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />

          <button id="result" onClick={this.handleResultClick}>=</button>

        {this.state.result}
        </p>
      </div>
    );
  }
}

export default Content;
