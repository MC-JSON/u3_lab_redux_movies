import Client from './'
const API_KEY = process.env.REACT_APP_API_KEY

export const GetMovies = async () => {
  try {
    const res = await Client.get(
      'https://api.themoviedb.org/3/movie/popular/?api_key=e8ee5e350d3e4010a76c5826e0babaa6'
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (movieId) => {
  try {
    const res = await Client.get(
      `/${movieId}?api_key=e8ee5e350d3e4010a76c5826e0babaa6`
    )
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
