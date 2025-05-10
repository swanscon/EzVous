import { useLocation } from "react-router-dom"

export default function SuccessPage() {
    //eventually implement useParam for "See Results" button/navigation

    const location = useLocation();
    const { title } = location.state || {};

    return (
        <div>
            <h3>Successfully submitted votes for {title || "TITLE NOT FOUND"}!</h3>
        </div>
    )
}