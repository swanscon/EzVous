import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function HomePage() {
    return (
        <>  
            <img src='ExV-logo.png' className="img-logo"/>
            <h1>Welcome to EzVous</h1>
            <h4 style={{ fontStyle: "italic", letterSpacing: ".1em"}}>pronounced (AY-voo)</h4>
            <p className="text-container">Get started by creating a "rendezvous", picking potential dates you are available to meet, chat, etc. Once created, you can share the link for others to vote on dates they are available.</p>
            <Link to="/new"><button>Create Rendezvous</button></Link>
        </>
    )
}