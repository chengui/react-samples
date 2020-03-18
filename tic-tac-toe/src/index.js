import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const NNN = 3;

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i) }
      />
    );
  }

  render() {
    const array = Array(NNN).fill(0);
    return (
      <div>
        {array.map((_, x) =>
        <div className="board-row">
          {array.map((_, y) =>
          this.renderSquare(NNN * x + y)
          )}
        </div>
        )}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(NNN * NNN).fill(null)
      }],
      coordindate: [
        -1,
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  calcWinner(squares) {
    let flag;
    for (let i = 0; i < NNN; i++) {
      flag = true;
      let first_col = squares[i * NNN];
      if (first_col) {
        for (let j = 1; j < NNN; j++) {
          let cur_col = squares[i * NNN + j];
          if (first_col !== cur_col) {
            flag = false;
            break;
          }
        }
        if (flag) {
          return first_col;
        }
      }
      flag = false;
    }
    for (let i = 0; i < NNN; i++) {
      flag = true;
      let first_row = squares[i];
      if (first_row) {
        for (let j = 1; j < NNN; j++) {
          let cur_row = squares[j * NNN + i];
          if (first_row !== cur_row) {
            flag = false;
            break;
          }
        }
        if (flag) {
          return first_row;
        }
      }
      flag = false;
    }
    {
      flag = true;
      let left_corner = squares[0 * NNN + 0];
      if (left_corner) {
        for (let i = 1; i < NNN; i++) {
          let cur_corner = squares[i * NNN + i];
          if (left_corner !== cur_corner) {
            flag = false;
            break;
          }
        }
        if (flag) {
          return left_corner;
        }
      }
      flag = false;
    }
    {
      flag = true;
      let right_corner = squares[0 * NNN + NNN-1];
      if (right_corner) {
        for (let i = 1; i < NNN; i++) {
          let cur_corner = squares[i * NNN + NNN-1-i];
          if (right_corner !== cur_corner) {
            flag = false;
            break;
          }
        }
        if (flag) {
          return right_corner;
        }
      }
      flag = false;
    }
    return null;
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const coordindate = this.state.coordindate.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if (this.calcWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares,
      }]),
      coordindate: coordindate.concat([i]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const history = this.state.history;
    const coordindate = this.state.coordindate;
    const current = history[this.state.stepNumber];
    const winner = this.calcWinner(current.squares);

    const moves = history.map((step, move) => {
      const row = coordindate[move] / NNN | 0;
      const col = coordindate[move] % NNN;
      let desc = move ?
        'Go to move #' + move + ': (' + row + ',' + col + ')':
        'Go to game start';
      if (this.state.stepNumber === move) {
        desc = <b>{desc}</b>;
      }
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i) }
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
