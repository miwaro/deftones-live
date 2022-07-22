import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import '../../App.css';

function BlackStallion() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <h2>Black Stallion</h2>
                <ol>
                    <li>Feiticeira</li>
                    <li>Digital Bath</li>
                    <li>Elite</li>
                    <li>Rx Queen</li>
                    <li>Street Carp</li>
                    <li>Teenager</li>
                    <li>Knife Prty</li>
                    <li>Korea</li>
                    <li>Passenger</li>
                    <li>Change (In the House of Flies)</li>
                    <li>Pink Maggit</li>
                </ol>
                <h3>Bonus Tracks</h3>
                <ol>
                    <li>Back to School (Mini Maggit)</li>
                    <li>The Boy's Republic</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default BlackStallion;