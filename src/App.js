import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div className="App">
      <h3>MOOOVVIIEESS</h3>
      <div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
