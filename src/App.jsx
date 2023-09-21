import './App.css'
import SearchField from './components/SearchField'
import Layout from './components/Layout'

function App() {


  return (
    <Layout>
    <div id="search-form__container">
      <SearchField /> 
      <p className="info">
        Search for nonprofits anywhere in the United States.
      </p>
    </div>
    </Layout>
  )
}

export default App
