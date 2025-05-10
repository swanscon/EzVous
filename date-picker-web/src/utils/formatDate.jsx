export default function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', month: '2-digit', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}