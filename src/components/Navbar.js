import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="deftones__menu">
            <Link to="home"><span>HOME</span></Link> - <Link to="shows"><span>SHOWS</span></Link> - <Link to="songs"><span>SONGS</span></Link>
        </div>

    )
}

export default Navbar;