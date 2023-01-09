import { Date } from "../components/Filters/Date";
import { Categories } from "../components/Filters/Categories";
import { MoreFilters } from "../components/Filters/More-Filters";
import { Languages } from "../components/Filters/Languages";
import { Genres } from "../components/Filters/Genres";
import { Price } from "../components/Filters/Price";
import OutdoorEvents from "../store/Outdoor-Events";

function Event() {
    return (
        <div className="Wrapper">
            <div className="Filters">
                <Date /> <br />
                <Languages /> <br />
                <Categories /> <br />
                <Genres /> <br />
                <MoreFilters /> <br />
                <Price />
            </div>

            <div className="Movies">
                <h3>Plays in Chennai</h3>
                {OutdoorEvents.map((event) => {
                    return (
                        <div className="Item" key={event.id}>
                            <img src={event.src} alt="Events Img" />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Event;