import { useState } from "react";
import Filters from "../../store/FilterOptions";

export const Genres = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">

            {/* Dropdown effect */}
            <h6 style={{ color: "rgb(240, 59, 59)" }} onClick={() => { setVisibility((prev) => !(prev))}}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"/> : 
                    <i class="bi bi-chevron-compact-up"/>}
                &nbsp;Genres</h6>

            {show &&
                <div className="tags">
                    {
                        // Displaying the filters in the specified category
                        Filters.find((filter) => filter.id === "Genres").Data.map((Genre) => {
                            return (
                                <>
                                    <label>
                                        <input type="checkbox" />
                                        <span>{Genre}</span>
                                    </label>
                                </>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}