import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import '../../App.css';

function KoiNoYokan() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <h2>Koi No Yokan</h2>
                <ol>
                    <li>Swerve City</li>
                    <li>Romantic Dreams</li>
                    <li>Leathers</li>
                    <li>Poltergeist</li>
                    <li>Entombed</li>
                    <li>Graphic Nature</li>
                    <li>Tempest</li>
                    <li>Gauze</li>
                    <li>Rosemary</li>
                    <li>Goon Squad</li>
                    <li>What Happened to You?</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default KoiNoYokan;