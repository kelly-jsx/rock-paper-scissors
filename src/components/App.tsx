import { useState } from 'react'
import '../style.scss'
import { Actions } from './Actions/Actions'

import { Header } from './Header'
import { RulesModal } from './RulesModal'

function App() {
  const [showRulesModal, setShowRulesModal] = useState(false)

  return (
    <>
      <div className="App flex h-screen w-screen flex-col bg-headerOutline p-8">
        <div className="flex w-full justify-center">
          <Header score={12} />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Actions />
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
