import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import submitVotes from "../data/submitVotes";

export default function PickerPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [datePicker, setDatePicker] = useState(null);
    const [selectedDates, setSelectedDates] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/datepicker/${id}`)
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
        const success = await submitVotes(id, selectedDates);
        if(success) navigate(`/${id}/submitted`, { state: { title: datePicker.title } });
        else alert("Unable to submit votes.");
    };

    if (!datePicker) return <div>Loading...</div>;

    return (
        <div>
            <h1>{datePicker.title}</h1>
            <ul>
                {datePicker.dates.map((date) => (
                    <li
                        key={date.id}
                        onClick={() => handleVote(date.id)}
                        style={{
                            listStyle: "none",
                            cursor: "pointer",
                            backgroundColor: selectedDates.includes(date.id)
                                ? "green"
                                : "grey",
                            fontWeight: selectedDates.includes(date.id)
                                ? "bold"
                                : "normal",
                        }}
                    >
                        {date.date} — Votes: {date.voteCount}
                    </li>
                ))}
            </ul>
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={selectedDates.length === 0}
            >
                Submit Votes
            </button>
        </div>
    );
}
