import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import submitEmail from "../data/submitEmail";

export default function SharePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const title = state?.title || "your rendezvous";

    const [copied, setCopied] = useState(false);
    const [notify, setNotify] = useState(false);
    const [email, setEmail] = useState("");

    const shareURL = `http://localhost:5173/${id}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareURL);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (error) {
            console.error("Failed to copy", error);
        }
    };

    const handleNotify = () => {
        setNotify(!notify);
    };

    const handleConfirm = async () => {
        await submitEmail(id, email);
        alert(
            `A message will be sent to ${email} when all votes have been submitted.`
        );
        setNotify(!notify);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const goToResults = () => navigate(`/${id}/results`);

    return (
        <div>
            <h3>
                Rendezvous <b>{title}</b> created!
            </h3>
            <p>Below is the link to share with proposed attendees.</p>
            <h4>{shareURL}</h4>
            <button onClick={handleCopy} disabled={copied}>
                {copied ? "Copied!" : "Copy Link"}
            </button>
            <br />
            {notify ? (
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                    <button onClick={handleConfirm}>Confirm</button>
                </div>
            ) : (
                <button onClick={handleNotify}>Notify Me!</button>
            )}

            <br />
            <button onClick={goToResults}>See Results</button>
        </div>
    );
}
