import { useState } from "react";
import Filters from "../../store/FilterOptions";

export const Date = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }} onClick={() => { setVisibility((prev) => !(prev))}}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"/> : 
                    <i class="bi bi-chevron-compact-up"/>}
                &nbsp;Date</h6>

            {show &&
                <div className="tags">
                    {
                        Filters[2].Data.map((lang) => {
                            return (
                                <>
                                    <label>
                                        <input type="checkbox" />
                                        <span>{lang}</span>
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