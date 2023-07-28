
import './App.css'
import { Aside } from './components/aside/Aside'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

function App() {

  return (
    <div className="app">
      <Header />
      <Aside />
      <Content />
      <Footer />
    </div>
  )
}

export default App
