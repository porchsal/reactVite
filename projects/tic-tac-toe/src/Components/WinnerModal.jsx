import React from 'react'
import Square from './Square'

export function WinnerModal({ winner, resetGame}) {
  if (winner === null ) return null

  const winnerText = winner === false ? 'Tied' : 'Won'

    return (
        <section className='winner'>
            <div className='text'>
              <h2>{winnerText}</h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Start New Game</button>
              </footer>


            </div>

          </section>
    )
  
}
