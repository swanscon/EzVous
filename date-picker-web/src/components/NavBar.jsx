import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src="/ExV-logo.png" alt="Logo" className="img-logo-sm" />
            </NavLink>
        </div>
    );
}
