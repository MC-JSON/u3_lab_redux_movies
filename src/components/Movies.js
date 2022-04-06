import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'
import { useEffect } from 'react'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchMovies: () => dispatch(LoadMovies()) }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div>
      {props.movieState.movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
