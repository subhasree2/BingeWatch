import { Date } from "../components/Filters/Date";
import { Categories } from "../components/Filters/Categories";
import { MoreFilters } from "../components/Filters/More-Filters";
import { Languages } from "../components/Filters/Languages";
import { Genres } from "../components/Filters/Genres";
import { Price } from "../components/Filters/Price";

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
        </div>
    )
}

export default Event;