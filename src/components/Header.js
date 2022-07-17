import { Link } from "react-router-dom";
function Header() {

    return (
        <div>
            <div id="header">
                <Link to="home">Deftones<span>Live</span></Link>
            </div>
            <div id="menu">
                <Link to="home">
                    <span>HOME</span></Link> - <Link to="shows"><span>SHOWS</span></Link> - <Link to="songs"><span>SONGS</span>
                </Link>
            </div>
        </div>

    )

}

export default Header;