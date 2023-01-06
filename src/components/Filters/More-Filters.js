import { useState } from "react";

export const MoreFilters = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"
                        onClick={() => { setVisibility((prev) => !(prev)); }} /> : <i class="bi bi-chevron-compact-up"
                            onClick={() => { setVisibility((prev) => !(prev)); }} />}
                &nbsp;More-Filters</h6>
            {show &&
                <div className="tags">
                    <button>Outdoor Events</button>
                    <button>Online Streaming</button>
                    <button>Fast Filling</button>
                    <button>Kids Allowing</button>
                    <button>Must Attend</button>
                    <button>World Music</button>
                </div>
            }
        </div>
    )
}