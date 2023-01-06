import { useState } from "react";

export const Categories = () => {
    const [show, setVisibility] = useState(false);
    return (
        <div className="Filter">
            <h6 style={{ color: "rgb(240, 59, 59)" }}>
                {!show ?
                    <i class="bi bi-chevron-compact-down"
                        onClick={() => { setVisibility((prev) => !(prev)); }} /> : <i class="bi bi-chevron-compact-up"
                            onClick={() => { setVisibility((prev) => !(prev)); }} />}
                &nbsp;Categories</h6>

            {show &&

                <div className="tags">
                    <button>Workshops</button>
                    <button>Comedy Shows</button>
                    <button>Online Streaming Events</button>
                    <button>Music Shows</button>
                    <button>Meetups</button>
                    <button>Performances</button>
                    <button>Kids</button>
                    <button>Exhibitions</button>
                    <button>Spirituality</button>
                    <button>Conferences</button>
                    <button>Screening</button>
                    <button>Award Shows</button>
                    <button>Celebrity Wishes</button>
                    <button>Talks</button>
                </div>
            }
        </div>
    )
}