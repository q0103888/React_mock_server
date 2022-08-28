import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header" >
            <h1>
                <Link to="/">Level N1</Link>
            </h1>
            <div className="menu">
            </div>
        </div>
    )
}