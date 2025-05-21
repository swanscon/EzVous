import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/ExV-icon-tp.svg";
import ghlogo from "../assets/gh-logo-link.svg";
import cslogo from "../assets/cs-logo-link.svg";
import coffeelogo from "../assets/coffee-logo-link.svg";
import ghlogotp from "../assets/gh-logo-link-tp.svg";
import cslogotp from "../assets/cs-logo-link-tp.svg";
import coffeelogotp from "../assets/heart-logo-link-tp.svg";

const MOBILE_BREAKPOINT = 768;

export default function FloatingNav() {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < MOBILE_BREAKPOINT
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return !isMobile ? (
        <div className="float-container">
            <img src={logo} className="float-icon" />
            <div className="float-links">
                <Link to="https://github.com/swanscon/EzVous" target="_blank">
                    <img src={ghlogotp} className="fixed-icon" alt="github" />
                </Link>
                <Link to="https://connorswanson.dev" target="_blank">
                    <img src={cslogotp} className="fixed-icon" alt="cs logo" />
                </Link>
                <Link
                    to="https://buymeacoffee.com/connorswanson"
                    target="_blank"
                >
                    <img
                        src={coffeelogotp}
                        className="fixed-icon"
                        alt="support me"
                    />
                </Link>
            </div>
        </div>
    ) : (
        <div className="fixed-container">
            <div className="fixed-links">
                <Link to="https://github.com/swanscon/EzVous" target="_blank">
                    <img src={ghlogo} className="fixed-icon" />
                </Link>
                <Link to="https://connorswanson.dev" target="_blank">
                    <img src={cslogo} className="fixed-icon" />
                </Link>
                <Link
                    to="https://buymeacoffee.com/connorswanson"
                    target="_blank"
                >
                    <img src={coffeelogo} className="fixed-icon" />
                </Link>
            </div>
        </div>
    );
}
