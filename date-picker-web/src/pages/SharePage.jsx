import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";

export default function SharePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const title = state?.title || "your rendezvous";

    const [copied, setCopied] = useState(false);
    const shareURL = `http://localhost:5173/${id}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareURL);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (error) {
            console.error("Failed to copy", error);
        }
    }

    const goToResults = () => navigate(`/${id}`);


    return (
        <div>
            <h3>Rendezvous <b>{title}</b> created!</h3>
            <p>Below is the link to share with proposed attendees.</p>
            <h4>{shareURL}</h4>
            <button onClick={handleCopy} disabled={copied}>
                {copied ? "Copied!" : "Copy Link"}
            </button>
            <br/><br/>
            <button onClick={goToResults}>See Results</button>
        </div>
    )
}