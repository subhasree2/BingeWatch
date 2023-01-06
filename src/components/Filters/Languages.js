import { useState } from "react";

export const Languages = () => {
    const [show, setVisibility] = useState(false);

    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"
                        onClick={() => { setVisibility((prev) => !(prev)); }} /> : <i class="bi bi-chevron-compact-up"
                            onClick={() => { setVisibility((prev) => !(prev)); }} />}
                &nbsp;Languages</h6>

            {show &&
                <div className="tags">
                    <button style={{ backgroundColor: "red" ? "white" : "red" }}>Kannada</button>
                    <button>Telugu</button>
                    <button>Tamil</button>
                    <button>Hindi</button>
                    <button>English</button>
                    <button>Malayalam</button>
                    <button>Bengali</button>
                    <button>English 7D</button>
                    <button>Marathi</button>
                </div>
            }
        </div>
    )
}
