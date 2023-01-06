import { useState } from "react";

export const Format = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }}>
            {!show ?
                    <i class="bi bi-chevron-compact-down"
                        onClick={() => { setVisibility((prev) => !(prev)); }} /> : <i class="bi bi-chevron-compact-up"
                            onClick={() => { setVisibility((prev) => !(prev)); }} />}
                &nbsp;Format</h6>

            {show &&
                <div className="tags">
                    <button>2D</button>
                    <button>3D</button>
                    <button>7D</button>
                    <button>4DX 3D</button>
                    <button>IMAX 3D</button>
                </div>
            }
        </div>
    )
}