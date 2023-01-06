import { Date } from "../components/Filters/Date";
import { Languages } from "../components/Filters/Languages";
import { Categories } from "../components/Filters/Categories";
import { MoreFilters } from "../components/Filters/More-Filters";
import { Price } from "../components/Filters/Price";

function Event() {
    return (
        <div className="Wrapper">
            <div className="Filters">
                <Date /> <br />
                <Languages /> <br />
                <Categories /> <br /> 
                <MoreFilters /> <br /> 
                <Price /> <br />
            </div>
        </div>
    )
}

export default Event;