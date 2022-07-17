import { Link } from "react-router-dom";
function Header() {

    return (
        <div>
            <div id="header">
                <a href="/">Deftones<span>Live</span></a>
            </div>
            <div id="menu">
                <a href="/"><span>HOME</span></a> - <a href="/shows"><span>SHOWS</span></a> - <a href="/songs"><span>SONGS</span></a>
            </div>
        </div>

    )

}

export default Header;