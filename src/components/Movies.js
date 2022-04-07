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
    console.log(props)
  }, [])

  return (
    <div>
      {props.movieState.movies.map((movie) => (
        <ul key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
