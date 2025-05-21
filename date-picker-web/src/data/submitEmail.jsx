export default async function submitEmail(datePickerId, email) {
    try {
        const response = await fetch(`http://localhost:8080/api/datepicker/${datePickerId}?email=${email}`, {
            method: 'PUT',
        });

        if(!response.ok) {
            throw new Error("Failed to submit email for notifications.");
        }
        console.log("Email submitted!");
    } catch (error) {
        console.error("Error submitting email for notifications. ", error.message);
    }
}