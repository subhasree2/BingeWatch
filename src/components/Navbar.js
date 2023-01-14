import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { auth, provider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    // Sign In With Google
    const SignInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        setOpen(false);
        navigate("/");
    }

    // Sign Out
    const signUserOut = async () => {
        await signOut(auth);
        console.log("successful");
        navigate("/");
    }

    return (
        <>
            <div className="Navbar">
                <span className="title" onClick={() => navigate("/")}>book<span style={{ color: "red" }}>my</span>show</span>
                <input type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                <span>{auth.currentUser?.displayName}</span>
                <span className="place">Chennai</span>
                {!auth.currentUser?.displayName &&
                    <button id="SignIn" onClick={() => setOpen(true)}>Sign In</button>
                }
                {auth.currentUser &&
                    <button id="SignIn" onClick={signUserOut}>LogOut</button>
                }
            </div>


            {/* Tabs / Links */}
            <div className="Tabs">
                <Link to="/movies">Movies</Link>
                <Link to="/stream">Stream</Link>
                <Link to="/event">Events</Link>
                <Link to="/play">Plays</Link>
                <Link to="/sport">Sports</Link>
                <Link to="/offers">Offers</Link>
                <Link to="/gift">Gift</Link>
            </div>


            {/* Modal form for signUp */}
            <Modal open={isOpen}>
                <div className="overlay">
                    <div className="popup">
                        <div className="content">
                            <h4>Get Started<i class="bi bi-x-lg" onClick={() => setOpen(false)}></i></h4>
                            <button onClick={SignInWithGoogle}><i class="bi bi-google"></i>Continue with Google</button>
                            <button><i class="bi bi-envelope-at-fill"></i>Continue with Email</button>
                            <button><i class="bi bi-apple"></i>Continue with Apple</button>
                            <span>I agree to the Terms and Conditions & Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}