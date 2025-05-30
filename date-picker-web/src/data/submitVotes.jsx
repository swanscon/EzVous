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
            console.error("Max submissions reached for this rendezvous.");
            return "MAX_SUBMISSIONS_REACHED";
        }

        if(!response.ok) {
            throw new Error("Failed to submit votes.");
        }
        console.log("Votes submitted!");
        return true;
    } catch (error) {
        console.error("Error submitting votes: ", error.message);
        return false;
    }
}