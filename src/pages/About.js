import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../App.css';

function About() {
    return (
        <div className="App" >
            <Header />
            <div id="common" className="center about">
                <img src="images/deftones-live.png" alt="Deftones Live" />
                <p>DeftonesLive is a fan run audio, video, and information archive of Deftones shows. If you'd like to reach out to us drop us a message via the contact form or on social media (Facebook, Youtube, or Instagram).</p>
            </div>
            <Footer />
        </div>

    )
}

export default About;