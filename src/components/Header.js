function Header() {

    return (
        <div>
            <header className="App-header" >
                <div className="deftones__header">Deftones<span>Live</span></div>
                <div className="deftones__menu">
                    {/* TODO: Replace with NAVBAR Component */}
                    <span>HOME</span> - <span>SHOWS</span> - <span>SONGS</span>
                </div>
            </header>
        </div>
    )

}

export default Header;