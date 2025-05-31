export default function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(+year, month - 1, +day);
    const options = { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}