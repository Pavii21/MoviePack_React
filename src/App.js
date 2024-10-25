import {useState,useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


//c770a428

const API_URL = "http://www.omdbapi.com?apikey=fdc4385b";

const movie1 ={
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg"

}

const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');

    }, []);
    return(
        <div className='app'>
            <h1>MoviePacks</h1>
            <div className='search'>
                <input 
                   placeholder='Search for movies'
                   value={searchTerm}
                   onChange={ (e) => setSearchTerm(e.target.value)}
                />
                <img
                   src ={SearchIcon}
                   alt="Search"
                   onClick={ () => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='conatiner'>
                       {movies.map((movie) => (
                          <MovieCard movie={movie}/>  
                       ))}
                    </div>
                ) : (
                   <div className='empty'>
                      <h2>No movies found</h2>
                   </div>
                )}
        </div>
    );
}

export default App;