import { useState, useEffect } from "react"
import './App.css';
import axios from "axios"

function getUrl(path) {
  if(process.env.NODE_ENV === "development"){
    return "http://localhost:5000" + path
  } else {
    return path
  }
}

function App() {

  const [ heros, setHeros ] = useState(null)

  useEffect(() => {
    axios.get(getUrl("api/heros"))
      .then(res => {
        console.log(res.data.heros)
        setHeros(res.data.heros)
      })
  }, [])

  


  return (
    <div className="App">
      <header className="App-header">
        {heros && heros.map(hero => {
          return <h1>{hero.name}</h1>
        })}
      </header>
    </div>
  );
}

export default App;
