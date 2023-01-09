import Premiere from "../store/Premiere";
import MainCarousel from "../components/Carousel/Carousel";
import { Link } from "react-router-dom";

const Stream = () => {
    return (
        <div>
            <MainCarousel />
            <div className="Movies">
                <h3>Premiere of the Week</h3>
                {Premiere.map((prem) => {
                    return (
                        <div className="Item" key={prem.id}>
                            <Link to={`/stream/${prem.Movie}`}>
                                <img src={prem.src} alt="Premiere Movies img" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Stream;