import { LoadMovieDetails } from '../store/actions/MovieActions'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchTitle: (id) => dispatch(LoadMovieDetails(id)) }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  }, [])

  return (
    <div>
      <h1>{props.movieDetailsState.details.title}</h1>
      <p>{props.movieDetailsState.details.overview}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
