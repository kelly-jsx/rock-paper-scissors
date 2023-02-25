import '../style.scss'

import { Header } from './Header'

function App() {
  return (
    <div className="App flex h-screen w-screen flex-col bg-headerOutline p-8">
      <div className="flex w-full justify-center">
        <Header score={12} />
      </div>
    </div>
  )
}

export default App
