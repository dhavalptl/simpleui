import './App.css'
import Greetings from './components/greetings'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple application 🚀</h2>
        <div style={{paddingTop: 20}}>
          <Greetings />
        </div>
      </header>
    </div>
  )
}

export default App
