import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [count, setCount] = useState(0)
  const [currenText, setCurrentText] = useState('Change Me By typing on avobe text box.')

  function handleChange(event){
    setCurrentText(event.target.value)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nazmul's Vite + React Demo App</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button><br /><br />
        <input type="text" name="demo" id="" onChange={handleChange}/>
        <p>
          {currenText}
        </p>
        <h1>{data}</h1>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
