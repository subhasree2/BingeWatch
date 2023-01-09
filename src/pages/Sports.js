import { Date } from "../components/Filters/Date";
import { Categories } from "../components/Filters/Categories";
import { MoreFilters } from "../components/Filters/More-Filters";
import SportsCarousel from "../components/Carousel/SportsCarousel";
import Sports from "../store/Sports";

function Event() {
    return (
        <>
            <SportsCarousel />
            <div className="Wrapper">
                <div className="Filters">
                    <Date /> <br />
                    <Categories /> <br />
                    <MoreFilters /> <br />
                </div>

                <div className="Sports">
                    <h3>Sports in Chennai</h3>
                    {Sports.map((sport) => {
                        return (
                            <div className="Item" key={sport.id}>
                                <img src={sport.src} alt="Sport Img" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Event;