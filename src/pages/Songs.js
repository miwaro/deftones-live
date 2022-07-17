import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../App.css';

function Songs() {
    return (
        <div className="App" >
        <Header />
        <div id="common">
            <div id="lpAlbums">
            <p>Adrenaline - Around The Fur - White Pony - Deftones - Saturday Night Wrist - Eros - Diamond Eyes - Koi No Yokan - Gore - Ohms</p>
            </div>
            <div id="otherAlbums">
            <p>Like Linus - B-sides & Rarities - Covers</p>
            </div>
        </div>
        <Footer />
        </div>

    )
}

export default Songs;