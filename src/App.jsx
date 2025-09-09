import './App.css'
import Topo from './components/topo'
import Capa from './components/Capa'
import Produto from './components/produtos'

function App() {

  return (
    <>
      <header>
        <Topo/>
      </header>

      <main>
        <Capa/>
        <Produto/>
      </main>
    </>
  )
}

export default App
