import MoviesData from "./../store/Movies";
import LiveEvents from "./../store/Live-Events";
import Premiere from "../store/Premiere";
import OutdoorEvents from "../store/Outdoor-Events";
import Sports from "../store/Sports";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainCarousel from "../components/Carousel/Carousel";
import { Link } from "react-router-dom";

function Main() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="Main">
            <MainCarousel /> <br />
            <h3>Recommended Movies</h3>
            <Carousel responsive={responsive}>

                {MoviesData.map((movie) => {
                    return (
                        <div className="Item" key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <img src={movie.src} alt="Movie Img" />
                            </Link>
                            <span className="Description">{movie.id}</span>
                            <span><i>Ratings : {movie.Ratings}</i></span>
                        </div>
                    );
                })}

            </Carousel>
            <br /><br />
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" className="banner" alt="banner" />

            <h3>The Best of Live Events</h3>
            <Carousel responsive={responsive}>

                {LiveEvents.map((event) => {
                    return (
                        <div className="Item" key={event.id}>
                            <img src={event.src} alt="Event img" />
                            <span className="Description">{event.id}</span>
                        </div>
                    );
                })}
            </Carousel><br /><br />

            <div className="Premiere">
                <h3>Premiere</h3>
                <Carousel responsive={responsive}>
                    {Premiere.map((prem) => {
                        return (
                            <div className="Item" key={prem.id}>
                                <img src={prem.src} alt="Premiere Movies img" />
                                <span className="Description">{prem.id}</span>
                                <span><i>{prem.Language}</i></span>
                            </div>
                        );
                    })}
                </Carousel><br /><br />
            </div>

            <h3>Outdoor Events</h3>
            <Carousel responsive={responsive}>
                {OutdoorEvents.map((out) => {
                    return (
                        <div className="Item" key={out.id}>
                            <img src={out.src} alt="Outdoor Events Img" />
                            <span className="Description">{out.id}</span>
                            <span><i>{out.Place}</i></span>
                        </div>
                    );
                })}
            </Carousel><br /><br />

            <h3>Top Games & Sports Events</h3>
            <Carousel responsive={responsive}>
                {Sports.map((game) => {
                    return (
                        <div className="Item" key={game.id}>
                            <img src={game.src} alt="Sport Img" />
                            <span className="Description">{game.id}</span>
                            <span><i>{game.Place}</i></span>
                        </div>
                    );
                })}
            </Carousel><br /><br />
        </div>
    );
}

export default Main;
