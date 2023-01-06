import { Languages } from "../components/Filters/Languages";
import { Genres } from "../components/Filters/Genres";
import { Format } from "../components/Filters/Format";
import MoviesData from "../store/Movies";
import MainCarousel from "../components/Carousel";

function Movies() {
    return (
        <>
        <MainCarousel />
        <div className="Wrapper">
            <div className="Filters">
                <Languages /> <br />
                <Genres /><br />
                <Format /><br />
            </div>
            <div className="Movies">
                <h3>Movies in Chennai</h3>
                {MoviesData.map((movie) => {
                    return (
                        <div className="Item">
                            <img src={movie.src} />
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
}

export default Movies;
