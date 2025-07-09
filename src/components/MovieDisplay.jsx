import { RefreshCw, Film } from 'lucide-react'
import AttributeButton from './AttributeButton'
import './MovieDisplay.css'

function MovieDisplay({ movie, banList, onToggleBan, loading, error, onDiscover }) {
  return (
    <div className="movie-display">
      {/* Movie Content */}
      {movie ? (
        <div className="movie-content">
          <h2 className="movie-title">{movie.title}</h2>

          {/* Clickable Attributes */}
          <div className="attributes-container">
            <AttributeButton
              attribute={movie.displayGenre}
              isBanned={banList.includes(movie.displayGenre)}
              onClick={() => onToggleBan(movie.displayGenre)}
            />

            <AttributeButton
              attribute={movie.displayYear}
              isBanned={banList.includes(movie.displayYear)}
              onClick={() => onToggleBan(movie.displayYear)}
            />

            <AttributeButton
              attribute={movie.displayDirector}
              isBanned={banList.includes(movie.displayDirector)}
              onClick={() => onToggleBan(movie.displayDirector)}
            />
          </div>

          {/* Movie Poster */}
          {movie.poster_path && (
            <div className="poster-container">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </div>
          )}
        </div>
      ) : !loading && (
        <div className="empty-state">
          <Film className="empty-icon" size={96} />
          <p className="empty-text">Click discover to find your next movie!</p>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="error-container">
          <p className="error-text">{error}</p>
        </div>
      )}

      {/* Discover Button */}
      <button
        onClick={onDiscover}
        disabled={loading}
        className={`discover-button ${loading ? 'loading' : ''}`}
      >
        <RefreshCw
          className={`discover-icon ${loading ? 'spinning' : ''}`}
          size={24}
        />
        <span>{loading ? 'Discovering...' : 'Discover!'}</span>
      </button>
    </div>
  )
}

export default MovieDisplay