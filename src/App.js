import Header from './components/Header.js';
import DataTable from './components/DataTable.js';
import Footer from './components/Footer.js';

import './App.css';

function App() {
  return (
    <div className="App" >
      <Header />
      <div id="common">
        <div className="video-container">
          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/70wKncA9Kbc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <h3>Deftones - Lovers (live debut)</h3>
        <p>Moda Center<br />
          Portland, OR<br />
          USA<br />
          April 14, 2022<br />
          North American Spring tour<br /><br />

          "Lovers"<br /><br />

          On August 26, 2003, Deftones released the song "Lovers" as a b-side to the single CD of "Hexagram". It is on April 14, 2022, roughly 19 years later following the release of the single, that they decided to play the song live for the first time. </p>
      </div>
      <Footer />
    </div >
  );
}

export default App;
