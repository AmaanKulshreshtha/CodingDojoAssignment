import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/* // rather than define a class with one return statement, we can use a function
class Square extends React.Component {  
    render() {
      return ( //square's props were specified by the Board
      // Board pass this.handleClick(i) to square, we need to define handleClick in Board
        <button className="square" 
          onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }*/

  class Board extends React.Component {
    constructor(props){
      super(props);
      var player = {score:1, name:'Jeff'};
      var newPlayer = Object.assign({},player,{score:2});
      console.log(newPlayer);
      this.state={ 
        squares:Array(9).fill(null), // initiate array of 9 with null
        xIsNext: true, // by default, X play first
      };
    }
  
    //handler method
    handleClick(i) {
      const squares = this.state.squares.slice(); // use slice to create a copy of squares
      if (calculateWinner(squares) || squares[i]){ // if we have winner or current square already clicked, ignore
          return;
      }
      console.log(squares);
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,  // flip xIsNext to the opposite boolean value
      });
      console.log('after setState,squares= '+squares);
    }

    renderSquare(i) {
      return <Square 
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)} 
      //pass down a function from Board to Square that gets called when the square is clicked
              />;
      // changed from value={i} to value={this.state.squares[i]} 
      // to allow square store the state of array of square
    }
  
    render() {
      //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner) {
        status = 'Winner: '+winner;
      } else {
        status = 'Next player: '+(this.state.xIsNext ? 'X':'O');
      }
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state =  {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
      };
    }
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
//export default App;
//registerServiceWorker();


function calculateWinner(squares) {
  const lines = [  // all winning cases
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}