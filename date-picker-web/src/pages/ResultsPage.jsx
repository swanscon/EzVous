import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ResultsKey from "../components/ResultsKey";
import voteColor from "../utils/voteColor";
import formatDate from "../utils/formatDate";

export default function ResultsPage() {
    const { id } = useParams();
    const [datePicker, setDatePicker] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/datepicker/${id}`)
            .then((result) => result.json())
            .then((data) => setDatePicker(data))
            .catch((error) =>
                console.error("Error fetching date picker: ", error)
            );
    }, [id]);

    const handleVoteColor = (date) => {
        return voteColor(datePicker.inviteCount, date.voteCount);
    };

    const checkMark = (date) => {
        return date.voteCount === datePicker.inviteCount ? " ✅" : "";
    };

    if (!datePicker) return <div>Loading...</div>;

    return (
        <div>
            <div>
                <h1>{datePicker.title}</h1>
                <ul>
                    {datePicker.dates.map((date) => (
                        <li
                            key={date.id}
                            style={{
                                listStyle: "none",
                                backgroundColor: handleVoteColor(date),
                            }}
                            className="datePickerDate"
                        >
                            {formatDate(date.date)}{checkMark(date)}
                        </li>
                    ))}
                </ul>
                <ResultsKey />
            </div>
        </div>
    );
}
