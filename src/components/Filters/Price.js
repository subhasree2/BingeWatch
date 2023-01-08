import { useState } from "react";
import Filters from "../../store/FilterOptions";

export const Price = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }} onClick={() => { setVisibility((prev) => !(prev))}}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"/> : 
                    <i class="bi bi-chevron-compact-up"/>}
                &nbsp;Price</h6>

            {show &&
                <div className="tags">
                    {
                        Filters.find((filter) => filter.id === "Price").Data.map((price) => {
                            return (
                                <>
                                    <label>
                                        <input type="checkbox" />
                                        <span>{price}</span>
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