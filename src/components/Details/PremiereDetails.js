import { useParams } from "react-router-dom";
import Premiere from "../../store/Premiere";

function PremiereDetails() {

    // Retrieving premiere movie name from the URL
    const { id } = useParams();
    const Premovie = Premiere.find((pre) => pre.id === id);

    return (
        <div className="Details">
            <div className="MainFrame">
                <div className="Picture">
                    <img src={Premovie.src} alt={Premovie.id} />
                </div>
                <div className="Content">
                    <h2>{Premovie.id}</h2>
                    <ul>
                        <li>Languages : {Premovie.Language}</li>
                        <li>Duration : {Premovie.Duration}</li>
                        <li>Genre : {Premovie.Genre}</li>
                        <li>Date : {Premovie.Date}</li>
                    </ul>

                    <div className="buttons">
                        <button className="book">Book Rs.{Premovie.Cost}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiereDetails;