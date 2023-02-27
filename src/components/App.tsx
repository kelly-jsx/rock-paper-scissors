import { useEffect, useState } from 'react'
import '../style.scss'
import { Actions } from './Actions/Actions'
import { GameResult } from './GameResult'

import { Header } from './Header'
import { RulesModal } from './RulesModal'

function App() {
  const [showRulesModal, setShowRulesModal] = useState(false)

  const [choice, setChoice] = useState('')
  // const [score, setScore] = useState(0)
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem('score')) || 0
  )

  const [showResults, setShowResults] = useState(false)

  const handleChoice = (choice: string) => {
    setChoice(choice)
    setShowResults(true)
    // computerPick()
  }

  const handleChangeScore = (updatedScore: number) => {
    setScore(updatedScore)
    localStorage.setItem('score', JSON.stringify(updatedScore))
  }

  return (
    <>
      <div className="App flex h-screen w-screen flex-col bg-headerOutline p-8">
        <div className="flex w-full justify-center">
          <Header score={score} />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          {showResults ? (
            <GameResult
              choice={choice}
              handlePlayAgain={() => setShowResults(false)}
              handleChangeScore={handleChangeScore}
              score={score}
            />
          ) : (
            <Actions handleChoice={handleChoice} />
          )}
        </div>
        <button
          className="w-max self-center rounded-md border px-12 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark lg:self-end"
          onClick={() => setShowRulesModal(true)}
        >
          RULES
        </button>
        {showRulesModal && (
          <RulesModal handleClose={() => setShowRulesModal(false)} />
        )}
      </div>
    </>
  )
}

export default App
