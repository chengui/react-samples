import React from 'react';
import './App.css';


class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <input className="formula" readOnly value={this.props.formula} />
        <input className="text" readOnly value={this.props.text} />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    let className = 'number-button';
    if (this.props.operator) {
      className = 'operator-button';
    }
    if (this.props.wide) {
      className = 'wide-button';
    }
    if (this.props.tall) {
      className = 'tall-button';
    }

    return (
      <div className={className}>
        <a href="#!" onClick={() => this.props.onClick(this.props.name)}>
          {this.props.name}
        </a>
      </div>
    );
  }
}

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div>
          <Button name="c" onClick={this.props.onClick} operator />
          <Button name="%" onClick={this.props.onClick} operator />
          <Button name="÷" onClick={this.props.onClick} operator />
          <Button name="x" onClick={this.props.onClick} operator />
        </div>
        <div>
          <Button name="7" onClick={this.props.onClick} number />
          <Button name="8" onClick={this.props.onClick} number />
          <Button name="9" onClick={this.props.onClick} number />
          <Button name="-" onClick={this.props.onClick} operator />
        </div>
        <div>
          <Button name="4" onClick={this.props.onClick} number />
          <Button name="5" onClick={this.props.onClick} number />
          <Button name="6" onClick={this.props.onClick} number />
          <Button name="+" onClick={this.props.onClick} operator />
        </div>
        <div>
          <Button name="1" onClick={this.props.onClick} number />
          <Button name="2" onClick={this.props.onClick} number />
          <Button name="3" onClick={this.props.onClick} number />
        </div>
        <div>
          <Button name="=" onClick={this.props.onClick} operator tall />
          <Button name="0" onClick={this.props.onClick} number wide />
          <Button name="." onClick={this.props.onClick} number />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '0',
      formula: '',
      computed: false,
    };
  }

  handleClick(i) {
    if (i === 'c') {
      this.setState({
        text: '0',
        formula: '',
        computed: false,
      });
    } else if (i === '=') {
      if (this.state.computed || isNaN(this.state.text)) {
        return;
      }
      let formula = this.state.formula;
      formula += this.state.text;
      formula = formula.replace(/x/g, '*').replace(/÷/g, '/');
      let text = eval(formula).toString();  /* eslint no-eval: 0 */
      this.setState({
        text,
        formula,
        computed: true,
      });
    } else if (i === '.') {
      if (!this.state.text.includes('.')) {
        this.setState({
          text: this.state.text + i,
        });
      }
    } else if (!isNaN(i)) {
      if (this.state.computed) {
        this.setState({
          text: i,
          formula: '',
          computed: false,
        });
      } else if (this.state.text === '0') {
        this.setState({
          text: i,
        });
      } else if (isNaN(this.state.text)){
        this.setState({
          text: i,
        });
      } else {
        this.setState({
          text: this.state.text + i,
        });
      }
    } else {
      if (this.state.computed) {
        this.setState({
          text: i,
          formula: this.state.text + i,
          computed: false,
        });
      } else if (!isNaN(this.state.text)) {
        let formula = this.state.formula;
        formula += this.state.text + i;
        this.setState({
          text: i,
          formula: formula,
        });
      }
    }
  }

  render() {
    return (
      <div className="board">
        <Display
          text={this.state.text}
          formula={this.state.formula}
        />
        <Panel
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    );
  }
}


export default App;
