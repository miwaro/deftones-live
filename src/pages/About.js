import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../App.css';

function About() {
    return (
        <div className="App" >
            <Header />
            <div id="common" className="center">
                <p>DeftonesLive is a fan run audio, video, and information archive of Deftones shows.</p>
            </div>
            <Footer />
        </div>

    )
}

export default About;