import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ IsVisible, setVisible }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="Navbar">
                <span className="title" onClick={() => navigate("/")}>book<span style={{ color: "red" }}>my</span>show</span>
                <input type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                <span className="place">Chennai</span>
                <button id="SignIn" onClick={() => setVisible(true)}>Sign In</button>
            </div>
            <div className="Tabs">
                <Link to="/movies">Movies</Link>
                <Link to="/stream">Stream</Link>
                <Link to="/event">Events</Link>
                <Link to="/play">Plays</Link>
                <Link to="/sport">Sports</Link>
                <Link to="/show">ListYourShow</Link>
                <Link to="/corporates">Corporates</Link>
                <Link to="/offers">Offers</Link>
                <Link to="/gift">Gift</Link>
            </div>

            {IsVisible &&
                <div className="popup">
                    <div className="overlay">
                        <div className="content">
                            <h4>Get Started<i class="bi bi-x-lg" onClick={() => setVisible(false)}></i></h4>
                            <button><i class="bi bi-google"></i>Continue with Google</button>
                            <button><i class="bi bi-envelope-at-fill"></i>Continue with Email</button>
                            <button><i class="bi bi-apple"></i>Continue with Apple</button>
                            <span>I agree to the Terms and Conditions & Privacy Policy</span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}