import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter'
import {motion} from "framer-motion";

function App() {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ea95880f21e278a9a338084e50ef9bab')
    const movies = await data.json()
    setPopular(movies.results);
    setFiltered(movies.results);

  };

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout className='popular-movies'>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
}

export default App;
