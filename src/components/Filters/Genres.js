import { useState } from "react";
export const Genres = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }}>
            {!show ?
                    <i class="bi bi-chevron-compact-down"
                        onClick={() => { setVisibility((prev) => !(prev)); }} /> : <i class="bi bi-chevron-compact-up"
                            onClick={() => { setVisibility((prev) => !(prev)); }} />}
                &nbsp;Genres</h6>

            {show &&
                <div className="tags">
                    <button>Drama</button>
                    <button>Thriller</button>
                    <button>Action</button>
                    <button>Romantic</button>
                    <button>Adventure</button>
                    <button>Comedy</button>
                    <button>Crime</button>
                    <button>Family</button>
                    <button>Horror</button>
                    <button>Mystery</button>
                    <button>Sci-Fi</button>
                    <button>Fantasy</button>
                    <button>Period</button>
                    <button>Psychological</button>
                    <button>Biography</button>
                    <button>Historical</button>
                    <button>Musical</button>
                    <button>Political</button>
                </div>
            }
        </div>
    )
}