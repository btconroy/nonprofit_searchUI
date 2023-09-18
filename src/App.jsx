import { useState } from 'react'
import npSearchLogo from './assets/nonprofit-search.svg'
import './App.css'

import SearchField from './components/SearchField'

function App() {


  return (
    <>
      <img className="logo" src={npSearchLogo} alt="nonprofit search logo" />
      
      <SearchField />
      
      <p className="info">
        Search for nonprofits anywhere in the United States.
      </p>
    </>
  )
}

export default App
