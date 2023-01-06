import { useState } from "react";

export const Date = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"
                        onClick={() => { setVisibility((prev) => !(prev)); }} /> : <i class="bi bi-chevron-compact-up"
                            onClick={() => { setVisibility((prev) => !(prev)); }} />}
                &nbsp;Date</h6>

            {show &&
                <div className="tags">
                    <button>Today</button>
                    <button>Tomorrow</button>
                    <button>This Weekend</button>
                </div>
            }
        </div>
    )
}