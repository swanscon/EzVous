import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import formatDate from "../utils/formatDate";
import submitVotes from "../data/submitVotes";

export default function PickerPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [datePicker, setDatePicker] = useState(null);
    const [selectedDates, setSelectedDates] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_URL}/api/datepicker/${id}`)
            .then((result) => result.json())
            .then((data) => setDatePicker(data))
            .catch((error) =>
                console.error("Error fetching date picker: ", error)
            );
    }, [id]);

    const handleVote = (dateId) => {
        setSelectedDates((prevDates) => {
            return prevDates.includes(dateId)
                ? prevDates.filter((id) => id !== dateId)
                : [...prevDates, dateId];
        });
    };

    const handleSubmit = async () => {
        const result = await submitVotes(id, selectedDates);
        if (result.success) {
            navigate(`/${id}/submitted`, {
                state: { id: datePicker.id, title: datePicker.title },
            });
        } else if (result.reason === "MAX_SUBMISSIONS_REACHED") {
            navigate("/error", {
                state: {
                    code: result.code,
                    message:
                        "Maximum number of submissions has been reached for this rendezvous.",
                },
            });
        } else {
            navigate("/error", {
                state: {
                    code: result.code,
                    message: "Unable to submit votes.",
                },
            });
        }
    };

    if (!datePicker) return <div>Loading...</div>;

    return (
        <div>
            <h1>{datePicker.title}</h1>
            <p>{datePicker.description}</p>
            <p>Select all dates you are available.</p>
            <ul>
                {datePicker.dates.map((date) => (
                    <li
                        key={date.id}
                        onClick={() => handleVote(date.id)}
                        className={
                            selectedDates.includes(date.id)
                                ? "picker-selected"
                                : "picker-btn"
                        }
                    >
                        <span className="date-text">
                            {formatDate(date.date)}
                        </span>
                        {selectedDates.includes(date.id) && (
                            <span className="picker-x">❌</span>
                        )}
                    </li>
                ))}
            </ul>
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={selectedDates.length === 0}
            >
                Submit Dates
            </button>
        </div>
    );
}
