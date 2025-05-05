import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <h1>DatePicker</h1>
            <Link to="/new"><button>New</button></Link>
        </>
    )
}