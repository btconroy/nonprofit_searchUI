import { useState } from 'react'
import npSearchLogo from './assets/nonprofit-search.svg'
import './App.css'

import SearchField from './components/SearchField'

function App() {


  return (
    <>
    <div id="nps-background-cover"></div>
    <img className="logo" src={npSearchLogo} alt="nonprofit search logo" />
    <div id="search-form__container">
      <SearchField /> 
      <p className="info">
        Search for nonprofits anywhere in the United States.
      </p>
    </div>
    </>
  )
}

export default App
