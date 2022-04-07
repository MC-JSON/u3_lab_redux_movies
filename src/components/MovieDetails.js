import { LoadMovieDetails } from '../store/actions/MovieActions'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id)) }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  }, [id])

  return <ul>{props.movieDetailsState.movieDetails.overview}</ul>
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
