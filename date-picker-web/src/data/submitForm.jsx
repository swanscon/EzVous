export default async function submitForm(title, dateList, count) {
    const data ={
        title: title,
        inviteCount: parseInt(count),
        dates: dateList.map(date => ({ date }))
    }

    try {
        const response = await fetch("http://localhost:8080/api/datepicker/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error("Failed to create DatePicker");
        }

        const result = await response.json();
        console.log("Created DatePicker: ", result);
        return [true, result.id];
    } catch (error) {
        console.error("Error submitting form: ", error.message);
        return [false, "Error submitting form"];
    }
}