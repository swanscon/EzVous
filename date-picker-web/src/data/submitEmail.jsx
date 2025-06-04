export default async function submitEmail(datePickerId, email) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/datepicker/${datePickerId}?email=${email}`, {
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