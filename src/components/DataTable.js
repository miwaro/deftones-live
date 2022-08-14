import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useSelector } from "react-redux";
import { allShows, columnData } from "../features/shows/showsSlice"
import AllTracks from './AllTracks.js'
import Eras from './Eras.js'
// import { addShows } from "../features/shows/showsSlice";

function DataTable() {
    const [showData, setShowData] = useState([])
    const [showTracks, setShowTracks] = useState(false)
    const [showTrackList, setShowTrackList] = useState([])
    const [encore1, setEncore1] = useState([])
    const [encore2, setEncore2] = useState([])
    const [info, setInfo] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [defaultEra, setDefaultEra] = useState("")

    const { SearchBar } = Search;

    // const dispatch = useDispatch();
    const allShowData = useSelector(allShows)
    const columns = useSelector(columnData)

    useEffect(() => {
        setShowData(allShowData)
    }, [])

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 15,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
    })

    const handleGoBack = () => {
        setDefaultEra("All")
        setShowTracks(false);
        setShowTrackList([]);
        setErrorMessage("")
        setEncore1([]);
        setEncore2([]);
        let allData = allShowData.map((shows) => {
            return {
                ...shows
            };
        })
        setShowData(allData);
    }

    const tableRowEvents = {
        onClick: (e, row, rowIndex) => {
            setDefaultEra("")
            if (showData.length === 1) {
                return handleGoBack();
            }

            let newShowData = showData.slice()
            let singleShow = newShowData.filter((show) => show.id === row.id);

            singleShow.forEach(show => {
                if (show.sets?.set[0]?.song === undefined &&
                    show.sets?.set[1]?.song === undefined &&
                    show.sets?.set[2]?.song === undefined
                ) {
                    setErrorMessage("Nothing Here Yet")
                }
                let songArray = show.sets?.set[0]?.song
                let songsExcludingTapeTracksArr = songArray?.filter(track => track.tape !== true)
                songsExcludingTapeTracksArr?.forEach(({ ...track }) => {
                    if (track?.info !== undefined) {
                        track.name = `${track.name} ${track.info}`
                    }
                    if (track?.with?.name !== undefined) {
                        track.name = `${track.name} with ${track.with.name}`
                    }
                    if (track?.cover?.name !== undefined) {
                        track.name = `${track.name} ${track.cover.name}`
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

            singleShow.forEach(show => {
                console.log('showInfo', show.info)
                setInfo(show.info)
            })

            setShowData(singleShow);
            setShowTrackList(showTrackList)
            setEncore1(encore1)
            setEncore2(encore2)
            setShowTracks(true);
        }
    }

    const handleDisplayEra = (startDate, endDate) => {
        const listDate = [];
        const dateMove = new Date(startDate);
        let strDate = startDate;

        while (strDate < endDate) {
            strDate = dateMove.toISOString().slice(0, 10);
            listDate.push(strDate);
            dateMove.setDate(dateMove.getDate() + 1);
        };

        let filtered = allShowData.filter((shows) => {
            return listDate.includes(shows.eventDate);
        })

        setShowData(filtered)
    }

    return (
        <div className="App" >
            <ToolkitProvider
                keyField="id"
                data={showData}
                columns={columns}
                bootstrap4
                search={{
                    searchFormatted: true
                }}
            >
                {
                    props => (
                        <div>
                            <div>
                                {/* TODO: Add debounce to searchbar */}
                                <div className="search"><SearchBar {...props.searchProps} placeholder="Search City, State, Venue, etc..." autofocus /></div>
                            </div>
                            <Eras displayEra={handleDisplayEra} defaultEra={defaultEra} />
                            <div className="tablecontain">
                                <BootstrapTable
                                    sort={{ dataField: 'eventDate', order: 'desc' }}
                                    bordered={false}
                                    pagination={!showTracks ? pagination : null}
                                    rowEvents={tableRowEvents}
                                    rowStyle={{ backgroundColor: '#0d0d0d', color: 'white', cursor: 'pointer' }}
                                    {...props.baseProps}
                                />
                            </div>
                        </div>
                    )
                }
            </ToolkitProvider>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'Red' }}> {errorMessage}</div>

            {
                showTracks &&
                <AllTracks
                    showTrackList={showTrackList}
                    encore1={encore1}
                    encore2={encore2}
                    info={info}
                    goBack={handleGoBack}
                />
            }
        </div >
    );
}

export default DataTable;
