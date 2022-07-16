import Header from './components/Header.js';
import DataTable from './components/DataTable.js';
// import Pagination from './components/Pagination.js';
// import Footer from './components/Footer.js';
// import AllTracks from './components/AllTracks.js';
import './App.css';

function App() {


  // useEffect(() => {
  //   let JSONwithReformattedDates = JSON.map((val) => {
  //     let date = val.eventDate;
  //     let result = date.split('-').reverse().join('-');
  //     return {
  //       ...val,
  //       eventDate: result
  //     };
  //   })
  //   setShowData(JSONwithReformattedDates)
  //   // dispatch(addShows(JSONwithReformattedDates))
  // }, [])

  // const columns = [
  //   { dataField: 'eventDate', text: 'Date', sort: true, headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
  //   { dataField: 'venue.name', text: 'Venue', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
  //   { dataField: 'venue.city.name', text: 'City', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
  //   { dataField: 'venue.city.state', text: 'State', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
  //   { dataField: 'venue.city.country.name', text: 'Country', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } }
  // ]

  //   const tableRowEvents = {
  //     onClick: (e, row, rowIndex) => {

  //         if (showData.length === 1) {
  //             return handleGoBack();
  //         }
  //         let singleShow = showData.filter((show) => show.id === row.id);

  //         singleShow.forEach(show => {
  //             if (show.sets?.set[0]?.song === undefined &&
  //                 show.sets?.set[1]?.song === undefined &&
  //                 show.sets?.set[2]?.song === undefined
  //             ) {
  //                 setErrorMessage("Nothing Here Yet")
  //             }
  //             show.sets?.set[0]?.song.forEach((track) => {
  //                 if (track?.tape !== undefined) {
  //                     track.tape = '  '
  //                     track.name = `${track.name} ${track.tape}`
  //                 }
  //                 if (track.info !== undefined) {
  //                     track.name = `${track.name} ${track.info}`
  //                 }
  //                 if (track?.with?.name !== undefined) {
  //                     track.name = `${track.name} with ${track.with.name}`
  //                 }
  //                 if (track?.cover?.name !== undefined) {
  //                     track.name = `${track.name} ${track.cover.name}`
  //                 }

  //                 showTrackList.push(track.name)
  //             })
  //         })

  //         singleShow.forEach(show => {
  //             show.sets?.set[1]?.song.forEach((encore) => {
  //                 encore1.push(encore.name)
  //             })
  //         })

  //         singleShow.forEach(show => {
  //             show.sets?.set[2]?.song.forEach((encore) => {
  //                 encore2.push(encore.name)
  //             })
  //         })

  //         setShowData(singleShow);
  //         setShowTrackList(showTrackList)
  //         setEncore1(encore1)
  //         setEncore2(encore2)
  //         setShowTracks(true);
  //     }
  // }

  // const pagination = paginationFactory({
  //   page: 1,
  //   sizePerPage: 19,
  //   lastPageText: '>>',
  //   firstPageText: '<<',
  //   nextPageText: '>',
  //   prePageText: '<',
  //   showTotal: true,
  //   alwaysShowAllBtns: true,
  // })

  return (
    <div className="App" >
      <Header />
      <DataTable />
    </div >
  );
}

export default App;
