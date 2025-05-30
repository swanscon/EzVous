import { useLocation } from "react-router-dom";

export default function ErrorPage() {
    const { state } = useLocation();
    const message = state?.message || "An unexpected error occurred.";

    return (
        <div>
            <h2>Error</h2>
            <p>{message}</p>
        </div>
    );
}
