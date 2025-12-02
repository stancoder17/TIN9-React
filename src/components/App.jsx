import {useState} from "react";
import MovieList from './MovieList.jsx';
import AddMovieForm from "./AddMovieForm.jsx";

const movie1 = {
    id: 1,
    name: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    runtime: 142,
    genre: "Drama",
    date: "1994-09-23",
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
};

const movie2 = {
    id: 2,
    name: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    runtime: 175,
    genre: "Crime",
    date: "1972-03-24",
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
};

const movie3 = {
    id: 3,
    name: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    runtime: 152,
    genre: "Action",
    date: "2008-07-18",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
};

function App() {
    const [movies, setMovies] = useState([movie1, movie2, movie3]);

    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const addMovie = (newMovie) => {
        setMovies([...movies, {...newMovie, id: movies.length + 1}]);
    }

    return (
        <>
            <AddMovieForm onAddMovie={addMovie} />
            <h1>Movies</h1>
            { movies.length === 0 &&
                <p>Movies list is empty.</p>
            }
            { movies.length > 0 &&
                <MovieList
                    movies={movies}
                    onAddMovie={addMovie}
                    onDeleteMovie={deleteMovie}
                />
            }
        </>

    );
}

export default App;
