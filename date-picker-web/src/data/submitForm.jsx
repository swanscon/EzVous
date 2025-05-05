export default function submitForm(title, dateList, count) {
    // eventually will call backend for PostRequest
    const dateListString = () => {
        return dateList.map((d, i) =>
            i === dateList.length - 1 ? `${d}.` : `${d}, `
        ).join('');
    };

    console.log(`Title: ${title}; Dates: ${dateListString()}; Attendees: ${count}`);
}