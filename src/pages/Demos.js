import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import '../App.css';

function Demos() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <h2>Demos</h2>
                <h3>The Deftones (Untitled) 1991/1992</h3>
                <ol>
                    <li>Answers</li>
                    <li>Hogburg Hop</li>
                </ol>
                <h3>Deftones (Untitled) 1992</h3>
                <ol>
                    <li>Like Linus</li>
                    <li>Hump</li>
                    <li>Some People</li>
                    <li>Plastic</li>
                </ol>
                <h3>Deftones (Untitled) 1992</h3>
                <ol>
                    <li>Like Linus</li>
                    <li>Christmas</li>
                    <li>Guest</li>
                </ol>
                <h3>Deftones (Untitled) 1993</h3>
                <ol>
                    <li>Engine No. 9</li>
                    <li>7 Words</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default Demos;