import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <div id="header">
                <NavLink to="/">Deftones<span>Live</span></NavLink>
            </div>
            <div id="menu">
                <NavLink
                    className={(navData) => navData.isActive ? "active" : "notActive"}
                    to="/">
                    <span>HOME</span>
                </NavLink> -
                <NavLink
                    className={(navData) => navData.isActive ? "active" : "notActive"}
                    to="/shows">
                    <span>SHOWS</span>
                </NavLink> -
                <NavLink
                    className={(navData) => navData.isActive ? "active" : "notActive"}
                    to="/songs">
                    <span>SONGS</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;