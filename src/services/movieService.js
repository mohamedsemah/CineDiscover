// TMDB API configuration
const API_KEY = '1dbc606b72d5b9fe93e73c9e07b95122'
const BASE_URL = 'https://api.themoviedb.org/3'

/**
 * Fetches a random movie that doesn't match any banned attributes
 * @param {string[]} banList - Array of banned attributes
 * @returns {Promise<Object>} Movie object with display attributes
 */
export async function fetchRandomMovie(banList = []) {
  const maxAttempts = 10
  let attempts = 0

  while (attempts < maxAttempts) {
    try {
      // Get random page (1-20 for better performance)
      const randomPage = Math.floor(Math.random() * 20) + 1

      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${randomPage}`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch movies from TMDB')
      }

      const data = await response.json()

      if (!data.results || data.results.length === 0) {
        throw new Error('No movies found in response')
      }

      // Pick a random movie from the results
      const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]

      // Get additional details
      const movieDetails = await fetchMovieDetails(randomMovie.id)

      // Extract consistent attributes
      const attributes = extractMovieAttributes(movieDetails)

      // Check if any attributes are banned
      const isBanned = banList.some(bannedItem =>
        Object.values(attributes).includes(bannedItem)
      )

      if (!isBanned) {
        return {
          ...movieDetails,
          ...attributes
        }
      }

      attempts++
    } catch (error) {
      attempts++
      if (attempts >= maxAttempts) {
        throw new Error(`Failed to fetch movie after ${maxAttempts} attempts: ${error.message}`)
      }
    }
  }

  throw new Error('Could not find a movie that matches your preferences. Try removing some items from the ban list.')
}

/**
 * Fetches detailed information for a specific movie
 * @param {number} movieId - TMDB movie ID
 * @returns {Promise<Object>} Detailed movie object
 */
async function fetchMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details for ID: ${movieId}`)
  }

  return await response.json()
}

/**
 * Extracts consistent display attributes from movie data
 * @param {Object} movie - Movie object from TMDB
 * @returns {Object} Object with display attributes
 */
function extractMovieAttributes(movie) {
  // Extract genre (first one if multiple)
  const displayGenre = movie.genres && movie.genres.length > 0
    ? movie.genres[0].name
    : 'Unknown Genre'

  // Extract year from release date
  const displayYear = movie.release_date
    ? new Date(movie.release_date).getFullYear().toString()
    : 'Unknown Year'

  // Extract director from credits (simplified for demo)
  let displayDirector = 'Unknown Director'
  if (movie.credits && movie.credits.crew) {
    const director = movie.credits.crew.find(person => person.job === 'Director')
    if (director) {
      displayDirector = director.name
    }
  }

  return {
    displayGenre,
    displayYear,
    displayDirector
  }
}