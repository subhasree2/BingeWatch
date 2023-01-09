import { useParams } from "react-router-dom";
import OutdoorEvents from "../../store/Outdoor-Events";

function EventDetails() {

    // Retrieving movie name from the URL
    const { id } = useParams();
    const event = OutdoorEvents.find((eve) => eve.Event === id);

    return (
        <div className="Events">
            <div className="Frame">
                <div className="Banner">
                    <img src={event.src} alt={event.src} />
                </div>
                <div className="Content">
                    <h2>{event.Event}</h2>
                    <div>{event.Place}</div>
                    <div>{event.Date}</div>
                    <div>{event.Info}</div>
                    <button className="Event">Book Tickets</button>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;