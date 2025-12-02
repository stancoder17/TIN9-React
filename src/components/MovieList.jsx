import MovieItem from "./MovieItem.jsx";

function MovieList({ movies, onDeleteMovie }) {
    return (
        <>
            <ol>
                {movies.map(movie => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onDelete={onDeleteMovie}
                    />
                ))}
            </ol>
        </>
    )
}

export default MovieList;