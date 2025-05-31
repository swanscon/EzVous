import { useLocation } from "react-router-dom";

export default function ErrorPage() {
    const { state } = useLocation();
    const code = state?.code ? `: ${state.code}` : "";
    const message = state?.message || "An unexpected error occurred.";

    return (
        <div>
            <h2>Error{code}</h2>
            <p>{message}</p>
        </div>
    );
}
