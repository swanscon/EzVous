import { useState } from "react";
import submitForm from "../data/submitForm";

export default function CreatePage() {
    const [title, setTitle] = useState("");
    const [dateCount, setDateCount] = useState(1);
    const [dateList, setDateList] = useState([]);
    const [attendeeCount, setAttendeeCount] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.name === "title") setTitle(e.target.value);
        else if(e.target.name === "date") handleUpdateDateList(e.target.value);
        else setAttendeeCount(e.target.value)
    }

    const handleUpdateDateList = (newDate) => {
        setDateList((dateList) => [...dateList, newDate]);
    }

    const handleIncrementDateCount = () => {
        setDateCount(dateCount + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(title, dateList, attendeeCount);
        // eventually will useNavigate("/{id}")
    }

    return (
        <>
            <div>
                <form type="submit" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" name="title" onChange={handleChange}/>
                    {Array(dateCount).fill(null).map((_, index) => (
                        <div key={index}>
                            <input type="date" name="date" onChange={handleChange}/>
                            <button type="button" onClick={handleIncrementDateCount}>
                                +
                            </button>
                        </div>
                    ))}
                    <input type="number" placeholder="Attendees" name="attendees" onChange={handleChange}/>
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    );
}
