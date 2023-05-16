
import './App.css';
import Board from './components/Board';
import { useState } from 'react';
  
function App() {

  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]

    ];
    
    for(let index = 0; index < lines.length; index++) {
      const [a,b,c] = lines[index];
        if (squares[a] 
          && squares[a] === squares[b] 
          && squares[a] === squares[c]) {
          return squares[a];
      } 
        
    }
    return null;
  }

  const current = history[stepNumber]; // index가 0부터 시작이기 때문에 -1 해주기
  const winner = calculateWinner(current.squares);

  let status;
  if(winner){
    status = 'Winner: ' + winner;
  } else{
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }


  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length -1];
    const newSquares = newCurrent.squares.slice();

    if(calculateWinner(newSquares) || newSquares[i]) {
      return;
    }// setHistory를 이용해서 그 전 과정은 지워주고 다시 선택 된 곳으로 돌아간다.

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, {squares: newSquares}]);
    setXIsNext(prev => !prev); 

    setStepNumber(newHistory.length);
  }
  

  const moves = history.map((step, move) => {
    const desc = move?
    'Go to move #' + move :
    'Go to game start';
    return(
      <li key ={move}> 
        <button onClick={()=>jumpTo(move)}>{desc}</button>
      </li>
    )// 리스트들에게 고유한 key 값을 주면 에러(unique "key" prop.)가 해결됨. move는 history 배열의 index값.
})

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
      <div className='status'>{status}</div>
      <ol>{moves}</ol>
      </div>
      
    </div>
  );
}

export default App;
