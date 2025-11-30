import '../stylesheets/styles.css';

function MovieItem({ movie, onDelete }) {
    return (
        <li className="movie-item">
            <strong>{movie.name}</strong>
            <p>{movie.description}</p>
            <p><strong>Director: </strong> {movie.director}</p>
            <p><strong>Runtime: </strong> {movie.runtime} min</p>
            <p><strong>Genre: </strong> {movie.genre}</p>
            <p><strong>Release date: </strong> {movie.date}</p>
            {movie.poster && <img className="poster" src={movie.poster} alt={movie.name} />}
            <button onClick={() => onDelete(movie.id)}>Delete</button>
        </li>
    );
}

export default MovieItem;

