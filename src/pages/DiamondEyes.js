import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../App.css';

function DiamondEyes() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <h2>Diamond Eyes</h2>
                <ol>
                    <li>Diamond Eyes</li>
                    <li>Royal</li>
                    <li>You've Seen The Butcher</li>
                    <li>Beauty School</li>
                    <li>Prince</li>
                    <li>Rocket Skates</li>
                    <li>Sextape</li>
                    <li>Risk</li>
                    <li>976-EVIL</li>
                    <li>This Place Is Death</li>
                </ol>
                <h3>Bonus Tracks</h3>
                <ol>
                    <li>Rocket Skates (M83 Remix)</li>
                    <li>Do You Believe (The Cardigans Cover)</li>
                    <li>Ghosts (Japan Cover)</li>
                    <li>Caress (Drive Like Jehu Cover)</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default DiamondEyes;