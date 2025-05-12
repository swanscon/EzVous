import { useLocation, NavLink } from "react-router-dom"

export default function SuccessPage() {

    const location = useLocation();
    const { id, title } = location.state || {};

    return (
        <div>
            <h3>Successfully submitted votes for <b>{title || "TITLE NOT FOUND"}</b>!</h3>
            <NavLink to={`/${id}/results`}><button>See Results</button></NavLink>
        </div>
    )
}