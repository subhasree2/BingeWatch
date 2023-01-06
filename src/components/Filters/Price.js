import { useState } from "react";

export const Price = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"
                        onClick={() => { setVisibility((prev) => !(prev)); }} /> : <i class="bi bi-chevron-compact-up"
                            onClick={() => { setVisibility((prev) => !(prev)); }} />}
                &nbsp;Price</h6>

            {show &&
                <div className="tags">
                    <button>Free</button>
                    <button>0-500</button>
                    <button>501-2000</button>
                    <button>Above 2000</button>
                </div>
            }
        </div>
    )
}