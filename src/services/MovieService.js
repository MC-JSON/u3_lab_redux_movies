import Client from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get(
      `discover/movie/?api_key=${process.env.REACT_APP_API_KEY}`
    )
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (movieId) => {
  try {
    const res = await Client.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    )
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
