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

          {/* Movie Layout */}
          <div className="movie-layout">
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

            {/* Movie Details */}
            <div className="movie-details">
              {/* Movie Stats */}
              <div className="movie-stats">
                {movie.vote_average && (
                  <div className="stat-item">
                    <div className="stat-label">Rating</div>
                    <div className="stat-value">⭐ {movie.vote_average.toFixed(1)}</div>
                  </div>
                )}

                {movie.runtime && (
                  <div className="stat-item">
                    <div className="stat-label">Runtime</div>
                    <div className="stat-value">{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</div>
                  </div>
                )}

                {movie.budget && movie.budget > 0 && (
                  <div className="stat-item">
                    <div className="stat-label">Budget</div>
                    <div className="stat-value">${(movie.budget / 1000000).toFixed(0)}M</div>
                  </div>
                )}
              </div>

              {/* Overview */}
              {movie.overview && (
                <p className="movie-overview">
                  {movie.overview}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : !loading && (
        <div className="empty-state">
          <div className="empty-icon">🎬</div>
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
        <span className={`discover-icon ${loading ? 'spinning' : ''}`}>
          🔄
        </span>
        <span>{loading ? 'Discovering...' : 'Discover!'}</span>
      </button>
    </div>
  )
}

export default MovieDisplay