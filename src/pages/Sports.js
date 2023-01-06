import { Date } from "../components/Filters/Date";
import { Categories } from "../components/Filters/Categories";
import { MoreFilters } from "../components/Filters/More-Filters";

function Event() {
    return (
        <div className="Wrapper">
            <div className="Filters">
                <Date /> <br />
                <Categories /> <br />
                <MoreFilters /> <br />
            </div>
        </div>
    )
}

export default Event;