export default async function submitVotes(datePickerId, selectedDateIds) {

    try {
        const response = await fetch(`http://localhost:8080/api/datepicker/${datePickerId}/vote`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ selectedDateIds: selectedDateIds })
        });

        if(response.status === 409) {
            return { success: false, code: 409, reason: "MAX_SUBMISSIONS_REACHED" };
        }

        if(!response.ok) {
            return { success: false, code: response.status, reason: "UNKNOWN" };
        }
        console.log("Votes submitted!");
        return { success: true };
    } catch (error) {
        console.error("Error submitting votes: ", error.message);
        return { success: false, code: 500, reason: "FETCH_ERROR" };
    }
}