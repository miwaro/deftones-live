import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import '../../App.css';

function Deftones() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <h2>Deftones</h2>
                <ol>
                    <li>Hexagram</li>
                    <li>Needles and Pins</li>
                    <li>Minerva</li>
                    <li>Good Morning Beautiful</li>
                    <li>Deathblow</li>
                    <li>When Girls Telephone Boys</li>
                    <li>Battle-Axe</li>
                    <li>Lucky You</li>
                    <li>Bloody Cape</li>
                    <li>Anniversary of an Uninteresting Event</li>
                    <li>Moana</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default Deftones;