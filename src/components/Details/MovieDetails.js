import { useParams } from "react-router-dom";
import MoviesData from "../../store/Movies";

function MovieDetails() {

    // Retrieving movie name from the URL
    const { id } = useParams();
    const movie = MoviesData.find((movie) => movie.id === id);

    return (
        <div className="Details">
            <div className="MainFrame">
                <div className="Picture">
                    <img src={movie.src} alt={movie.id} />
                </div>
                <div className="Content">
                    <h2>{movie.id}</h2>
                    <span><i class="bi bi-star-fill"></i>&nbsp; {movie.Ratings}/10  {movie.Votes}</span>
                    <ul>
                        <li>Available in {movie.Format}</li>
                        <li>Languages : {movie.Languages}</li>
                        <li>Duration : {movie.Duration}</li>
                        <li>Genre : {movie.Genre}</li>
                        <li>Date : {movie.Date}</li>
                    </ul>
                    <div>{movie.Info}</div>

                    <div className="buttons">
                        <button className="book">Book Tickets</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;