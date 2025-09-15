import './App.css'
import Topo from './components/topo'
import Capa from './components/Capa'
import Produto from './components/produtos'
import Colecoes from './components/Colecoes'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header>
        <Topo/>
      </header>

      <main>
        <Capa/>
        <Produto/>
        <Colecoes/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
