import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/ExV-icon-tp.svg";
import ghlogo from "../assets/gh-logo-link.svg";
import cslogo from "../assets/cs-logo-link.svg";
import coffeelogo from "../assets/coffee-logo-link.svg";
import ghlogotp from "../assets/gh-logo-link-tp.svg";
import cslogotp from "../assets/cs-logo-link-tp.svg";
import coffeelogotp from "../assets/heart-logo-link-tp.svg";



export default function FloatingNav({ isMobile }) {

    const [isClicked, setIsClicked] = useState(false);



    const handleSetIsClicked = () => {
        setIsClicked(!isClicked);
    };

    return !isMobile ? (
        <div className={`float-container ${isClicked ? "expanded" : ""}`}>
            <img src={logo} className="float-icon" onClick={handleSetIsClicked}/>
            <div className="float-links">
                <Link to="https://github.com/swanscon/EzVous" target="_blank">
                    GitHub
                </Link>
                <Link to="https://connorswanson.dev" target="_blank">
                    Portfolio
                </Link>
                <Link
                    to="https://buymeacoffee.com/connorswanson"
                    target="_blank"
                >
                </Link>
            </div>
        </div>
    ) : (
        <div className="fixed-container">
            <div className="fixed-links">
                <Link to="https://github.com/swanscon/EzVous" target="_blank">
                    GitHub
                </Link>
                <Link to="https://connorswanson.dev" target="_blank">
                    Portfolio
                </Link>
                <Link
                    to="https://buymeacoffee.com/connorswanson"
                    target="_blank"
                >
                    Support
                </Link>
            </div>
        </div>
    );
}
