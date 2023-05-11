import React, { useState } from 'react';
import Square from './Square'
import "./Board.css";



const Board = () => {
    
  const [squares, setsquares] = useState(Array(9).fill(null))
  const [xIsNext, setxIsNext] = useState(true);

  const status = `Next player: ${xIsNext ? 'X': 'O'}`; // ' 가 아니라 `

  // const [number, setNumber] = useState(0);

   const handleClick = (i) => {
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setsquares(newSquares);
        setxIsNext(prev => !prev); 
        // setxIsNext(!xIsNext);



        //setxIsNext 예시
        // setNumber(number +1);
        // setNumber(number +1);// 우리가 바란건 2, 하지만 1이 찍힘.

        // setNumber(prev => prev + 1);
        // setNumber(prev => prev + 1); // 바로 2가 찍힘.

        // console.log('number', number); 
        
    }
    


    const renderSquare = (i) => {
        return <Square value={squares[i]}
                     onClick={() => handleClick(i)} />
    }

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}

        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}

        </div>
      </div>
      
    )
  }

  export default Board;
