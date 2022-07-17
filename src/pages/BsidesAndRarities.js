import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../App.css';

function BsidesAndRarities() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <h2>B-sides & Rarities</h2>
                <h3>CD</h3>
                <ol>
                    <li>Savory</li>
                    <li>Wax And Wane</li>
                    <li>Change (In the House of Flies) Acoustic</li>
                    <li>Simple Man</li>
                    <li>Sinatra</li>
                    <li>No Ordinary Love</li>
                    <li>Teenager (Idiot Version)</li>
                    <li>Crenshaw Punch (I'll Throw Rocks At You)</li>
                    <li>Black Moon</li>
                    <li>If Only Tonight We Could Sleep</li>
                    <li>Please Please Please Let Me Get What I Want</li>
                    <li>Digital Bath Acoustic</li>
                    <li>The Chauffeur</li>
                    <li>Be Quiet and Drive (Far Away) Acoustic</li>
                    <li>Black Moon</li>
                </ol>
                <h3>DVD</h3>
                <ol>
                    <li>7 Words</li>
                    <li>Bored</li>
                    <li>My Own Summer</li>
                    <li>Be Quiet and Drive (Far Away)</li>
                    <li>Change (In the House of Flies)</li>
                    <li>Back To School (Mini Maggit)</li>
                    <li>Digital Bath</li>
                    <li>Minerva</li>
                    <li>Hexagram</li>
                    <li>Bloody Cape</li>
                    <li>Engine No. 9</li>
                </ol>
                <h3>DVD Bonus</h3>
                <ol>
                    <li>Root</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default BsidesAndRarities;