import { useState, useEffect } from 'react';
import './App.css';
import JSON from './json/deftones-setlists.json';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

function App() {
  const [showData, setShowData] = useState([])
  const [showTracks, setShowTracks] = useState(false)
  const [showTrackList, setShowTrackList] = useState([])
  const [encore1, setEncore1] = useState([])
  const [encore2, setEncore2] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const columns = [
    { dataField: 'eventDate', text: 'Date', sort: true, headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
    { dataField: 'venue.name', text: 'Venue', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
    { dataField: 'venue.city.name', text: 'City', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
    { dataField: 'venue.city.state', text: 'State', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
    { dataField: 'venue.city.country.name', text: 'Country', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } }
  ]

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 19,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
  })

  useEffect(() => {
    let JSONwithReformattedDates = JSON.map((val) => {
      let date = val.eventDate;
      let result = date.split('-').reverse().join('-');
      return {
        ...val,
        eventDate: result
      };
    })
    setShowData(JSONwithReformattedDates)
  }, [])

  const handleGoBack = () => {
    setShowTracks(false);
    setShowTrackList([]);
    setErrorMessage("")
    setEncore1([]);
    setEncore2([]);
    let JSONwithReformattedDates = JSON.map((val) => {
      let date = val.eventDate;
      let result = date.split('-').reverse().join('-');
      return {
        ...val,
        eventDate: result
      };
    })
    setShowData(JSONwithReformattedDates);
  }

  const tableRowEvents = {
    onClick: (e, row, rowIndex) => {

      if (showData.length === 1) {
        return handleGoBack();
      }
      let singleShow = showData.filter((show) => show.id === row.id);

      singleShow.forEach(show => {
        if (show.sets?.set[0]?.song === undefined &&
          show.sets?.set[1]?.song === undefined &&
          show.sets?.set[2]?.song === undefined
        ) {
          // return alert("nothing here yet")
          setErrorMessage("Nothing Here Yet")
        }
        show.sets?.set[0]?.song.forEach((track) => {
          if (track?.with?.name !== undefined) {
            track.name = `${track.name} with ${track.with.name}`
          }
          showTrackList.push(track.name)
        })
      })

      singleShow.forEach(show => {
        show.sets?.set[1]?.song.forEach((encore) => {
          encore1.push(encore.name)
        })
      })

      singleShow.forEach(show => {
        show.sets?.set[2]?.song.forEach((encore) => {
          encore2.push(encore.name)
        })
      })

      setShowData(singleShow);
      setShowTrackList(showTrackList)
      setEncore1(encore1)
      setEncore2(encore2)
      setShowTracks(true);
    }
  }

  const { SearchBar } = Search;

  return (
    <div className="App" >
      <ToolkitProvider
        keyField="id"
        data={showData}
        columns={columns}
        // defaultSorted

        search={{
          searchFormatted: true
        }}
        bootstrap4
      >
        {
          props => (
            <div>
              <div>
                <header className="App-header" >
                  <div className="deftones__header">Deftones<span>Live</span></div>
                  <div className="deftones__menu">
                    <span>HOME</span> - <span>SHOWS</span> - <span>SONGS</span>
                  </div>
                  <div className="search"><SearchBar {...props.searchProps} placeholder="Search..." autofocus /></div>
                </header>
              </div>
              <div class="tablecontain">
                <BootstrapTable
                  sort={{ dataField: 'eventDate', order: 'desc' }}
                  bordered={false}
                  pagination={!showTracks ? pagination : null}
                  rowEvents={tableRowEvents}
                  rowStyle={{ backgroundColor: '#0d0d0d', color: 'white' }}
                  {...props.baseProps}
                />
              </div>
            </div>
          )
        }
      </ToolkitProvider>



      {showTracks &&
        <div class="tablecontain">
          <div className="setlist__container">
            <div>
              <h4>Main Set</h4><button className='btn__goBack' onClick={handleGoBack}>Go Back</button>
              <hr />
              {
                showTrackList.map((track, i) => {
                  return (
                    <div style={{ border: '1px solid #FFF', padding: '5px', backgroundColor: 'rgba(128, 128, 128, 0.636)' }} >
                      <li style={{ listStyle: 'none', fontWeight: 'bold', padding: '5px 0' }}>{`${i + 1}. ${track}`}</li>
                    </div>
                  )
                })
              }
            </div>
            <div>
              <h4>Encore 1</h4>
              <hr />
              {
                encore1.map((encore, i) => {
                  return (
                    <div style={{ border: '1px solid #FFF', padding: '5px', backgroundColor: 'rgba(128, 128, 128, 0.636)' }}>
                      <li style={{ listStyle: 'none', fontWeight: 'bold' }}>{`${i + 1}. ${encore}`}</li>
                    </div>
                  )
                })
              }
            </div>
            <div>
              <h4>Encore 2</h4>
              <hr />
              {
                encore2.map((encore2, i) => {
                  return (
                    <div>
                      <li style={{ listStyle: 'none', fontWeight: 'bold' }}>{`${i + 1}. ${encore2}`}</li>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        }
      </div >
  );
}

export default App;
