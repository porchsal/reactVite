import React, {useState} from 'react';
import confetti from "canvas-confetti";
import { TURNS } from './constants';
import Square from './Components/Square';
import { checkWinnerFrom, checkEndGame } from './logic/board';
import { WinnerModal } from './Components/WinnerModal';


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(() => { 
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });

  
  const [winner, setWinner] = useState(null) // null no winner, false tied
  
    
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  

  const updateBoard = (index) => {
    //can;t update position if
    if (board[index] || winner) return
    //update board
    const newBoard = [...board]
    newBoard[index]=turn
    setBoard(newBoard)
    //update turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //save on localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    //check if there's a winner
  
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
        setWinner(false) //tied
    }
  }
  return (
    <main  className="board">
    
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )

          }) 
        }

      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square> 
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
        
      <WinnerModal winner={winner} resetGame={resetGame}/>


    </main>
  )
}

export default App
