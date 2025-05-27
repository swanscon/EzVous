import { useState } from "react";
import { useNavigate } from "react-router-dom";
import submitForm from "../data/submitForm";

export default function CreatePage() {
    const [title, setTitle] = useState("");
    const [dateCount, setDateCount] = useState(1);
    const [dateList, setDateList] = useState([]);
    const [attendeeCount, setAttendeeCount] = useState(0);

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === "title") setTitle(e.target.value);
        else if (e.target.name === "date") handleUpdateDateList(e.target.value);
        else if (e.target.name === "attendees")
            setAttendeeCount(e.target.value);
    };

    const handleUpdateDateList = (index, newDate) => {
        setDateList((prevList) => {
            const updated = [...prevList];
            updated[index] = newDate;
            return updated;
        });
    };

    const handleIncrementDateCount = () => {
        setDateCount(dateCount + 1);
    };

    const isValid =
        title.trim() !== "" &&
        dateList.length > 0 &&
        parseInt(attendeeCount) > 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [success, result] = await submitForm(
            title,
            dateList,
            attendeeCount
        );
        if (success) {
            navigate(`/${result}/share`, { state: { title } });
        } else {
            alert(result);
        }
    };

    const handleClearForm = () => {
        setTitle("");
        setDateCount(1);
        setDateList([]);
        setAttendeeCount(0);
    };

    return (
        <>
            <div>
                <form type="submit" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                    {Array(dateCount)
                        .fill(null)
                        .map((_, index) => (
                            <div key={index}>
                                <input
                                    type="date"
                                    name="date"
                                    value={dateList[index] || ""}
                                    onChange={(e) =>
                                        handleUpdateDateList(
                                            index,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        ))}
                        
                    <div>
                        <button
                            type="button"
                            onClick={handleIncrementDateCount}
                            className="btn-small"
                        >
                            Add Date
                        </button>
                        <input
                            type="number"
                            placeholder="Attendees"
                            name="attendees"
                            onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <button type="reset" onClick={handleClearForm}>
                            Reset
                        </button>
                        <button type="submit" disabled={!isValid}>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
