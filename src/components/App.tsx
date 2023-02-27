import { useEffect, useState } from 'react'
import '../style.scss'
import { Actions } from './Actions/Actions'

import { Header } from './Header'
import { RulesModal } from './RulesModal'

function App() {
  const [showRulesModal, setShowRulesModal] = useState(false)

  const [choice, setChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [playerWin, setPlayerWin] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    winResult()
  }, [choice, computerChoice])

  const handleChoice = (choice: string) => {
    setChoice(choice)
    computerPick()
  }

  const computerPick = () => {
    const choices = ['rock', 'paper', 'scissors']
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(computerChoice)
    console.log('computer choice: ' + computerChoice)
  }

  const winResult = () => {
    if (choice === 'paper' && computerChoice === 'scissors') {
      setPlayerWin('You lose')
      setScore(score - 1)
    } else if (choice === 'paper' && computerChoice === 'rock') {
      setPlayerWin('You win')
      setScore(score + 1)
    } else if (choice === 'scissors' && computerChoice === 'paper') {
      setPlayerWin('You win')
      setScore(score + 1)
    } else if (choice === 'scissors' && computerChoice === 'rock') {
      setPlayerWin('You lose')
      setScore(score - 1)
    } else if (choice === 'rock' && computerChoice === 'paper') {
      setPlayerWin('You lose')
      setScore(score - 1)
    } else if (choice === 'rock' && computerChoice === 'scissors') {
      setPlayerWin('You win')
      setScore(score + 1)
    } else {
      setPlayerWin('Draw')
    }
  }

  return (
    <>
      <div className="App flex h-screen w-screen flex-col bg-headerOutline p-8">
        <div className="flex w-full justify-center">
          <Header score={score} />
          <div className="flex flex-col text-white">
            <p>You: {choice}</p>
            <p>CPU: {computerChoice}</p>
            <p>{playerWin}</p>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Actions handleChoice={handleChoice} />
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
