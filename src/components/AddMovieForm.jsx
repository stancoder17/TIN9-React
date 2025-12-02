import {useState} from "react";
import ValidatedFormInput from "./ValidatedFormInput.jsx";

function AddMovieForm({onAddMovie}) {
    const [newMovie, setNewMovie] = useState({
        name: '',
        description: '',
        director: '',
        runtime: '',
        genre: '',
        date: '',
        poster: ''
    });

    /* resetKey changes ids of components upon form submission to force React to re-mount them (sets 'touched' = false again).
    * Without it the inputs would stay 'touched' and STILL show validation errors on the form that was just submitted.
    * */
    const [resetKey, setResetKey] = useState(0);



    const onChange = (e) => {
        setNewMovie({...newMovie, [e.target.name]: e.target.value} );
    }

    const handleSubmit = (e) => {
        e.preventDefault();  // prevent page reload on form submission - default behaviour :D
        onAddMovie(newMovie);
        setNewMovie({ // clear the form
            name: '',
            description: '',
            director: '',
            runtime: '',
            genre: '',
            date: '',
            poster: ''
        });
        setResetKey(prev => prev + 1);
    }

    return (
        <form className="MovieForm" onSubmit={handleSubmit}>
            <ValidatedFormInput key={`name-${resetKey}`} name="name" value={newMovie.name} onChange={onChange} /> <br/>
            <ValidatedFormInput key={`description-${resetKey}`} name="description" value={newMovie.description} onChange={onChange} /> <br/>
            <ValidatedFormInput key={`director-${resetKey}`} name="director" value={newMovie.director} onChange={onChange} /> <br/>
            <ValidatedFormInput key={`runtime-${resetKey}`} type="number" name="runtime" value={newMovie.runtime} onChange={onChange} /> <br/>
            <ValidatedFormInput key={`genre-${resetKey}`} name="genre" value={newMovie.genre} onChange={onChange} /> <br/>
            <ValidatedFormInput key={`date-${resetKey}`} type="date" name="date" value={newMovie.date} onChange={onChange} /> <br/>
            <ValidatedFormInput key={`poster-${resetKey}`} type="url" name="poster" value={newMovie.poster} onChange={onChange} /> <br/> <br/>
            <button type="submit">Add Movie</button>
        </form>

    )
}

export default AddMovieForm;
