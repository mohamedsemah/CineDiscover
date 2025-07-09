import { useState } from 'react'
import Header from './components/Header'
import MovieDisplay from './components/MovieDisplay'
import BanList from './components/BanList'
import { fetchRandomMovie } from './services/movieService'
import './App.css'

function App() {
  const [currentMovie, setCurrentMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [banList, setBanList] = useState([])

  const handleDiscoverMovie = async () => {
    setLoading(true)
    setError(null)

    try {
      const movie = await fetchRandomMovie(banList)
      setCurrentMovie(movie)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleBanList = (attribute) => {
    if (banList.includes(attribute)) {
      setBanList(banList.filter(item => item !== attribute))
    } else {
      setBanList([...banList, attribute])
    }
  }

  return (
    <div className="app">
      <div className="app-background" />

      <div className="app-content">
        <div className="main-section">
          <Header />

          <MovieDisplay
            movie={currentMovie}
            banList={banList}
            onToggleBan={toggleBanList}
            loading={loading}
            error={error}
            onDiscover={handleDiscoverMovie}
          />
        </div>

        <BanList
          banList={banList}
          onToggleBan={toggleBanList}
        />
      </div>
    </div>
  )
}

export default App