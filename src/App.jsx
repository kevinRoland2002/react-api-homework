import { useEffect, useState } from 'react'
import { CardList } from './components/CardList'
import './App.css'

const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character'

function App() {

  const [response, setResponse] = useState([])

  useEffect(()=>{

    fetch(URL_CHARACTERS)
      .then(response => {
        if (!response.ok) throw new Error('Error fetching data.');
        return response.json();})
        
      .then(data => setResponse(data.results))
      .catch((error) => {
        alert(error)
      })
  },[])

  return (
    <>
      <h1>Rick and Morty API</h1>
      <br />
      <CardList data={response} />
    </>
  )
}

export default App

