import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="Navbar">
                <span className="title" onClick={() => navigate("/")}>book<span style={{ color: "red" }}>my</span>show</span>
                <button type="submit"><i class="bi bi-search"></i></button>
                <input type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                <span>Chennai</span>
                <button id="SignIn">Sign In</button>
            </div>
            <div className="Tabs">
                <Link to="/movies">Movies</Link>
                <Link to="/stream">Stream</Link>
                <Link to="/event">Events</Link>
                <Link to="/play">Plays</Link>
                <Link to="/sport">Sports</Link>
                <Link to="/activities">Activities</Link>
                <Link to="/buzz">Buzz</Link>
            </div>
        </>
    )
}