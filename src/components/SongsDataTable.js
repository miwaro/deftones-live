import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useSelector } from "react-redux";
import { allSongs, columnSongData } from "../features/shows/showsSlice"
import SongDetails from './SongDetails.js';


function SongDataTable() {

    const [songData, setSongData] = useState([])
    const [showSongDetails, setShowSongDetails] = useState(false);
    const [songTitle, setSongTitle] = useState("");
    const [albumTitle, setAlbumTitle] = useState("");
    const [lyrics, setLyrics] = useState("");
    const { SearchBar } = Search;
    const allSongData = useSelector(allSongs)
    const columns = useSelector(columnSongData)

    useEffect(() => {
        setSongData(allSongData)
    }, [allSongData])

    console.log('allSongData', allSongData)


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

    // const handleGoBack = () => {

    // }

    const tableRowEvents = {
        onClick: (e, row, rowIndex) => {
            setShowSongDetails(true)
            setSongTitle(row.name)
            setAlbumTitle(row.album)
            setLyrics(row.lyrics)
        }
    }


    return (
        <div className="App" >
            {showSongDetails ?
                <SongDetails song={songTitle} album={albumTitle} lyrics={lyrics} /> :

                <ToolkitProvider
                    keyField="id"
                    data={songData}
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
                                    <div className="songSearch"><SearchBar {...props.searchProps} placeholder="Search" autofocus /></div>
                                </div>
                                <div className="tablecontain">
                                    <BootstrapTable
                                        sort={{ dataField: 'timestamp', order: 'desc' }}
                                        // pagination={!showTracks ? pagination : null}
                                        bordered={false}
                                        pagination={pagination}
                                        rowEvents={tableRowEvents}
                                        rowStyle={{ backgroundColor: '#0d0d0d', color: 'white', cursor: 'pointer' }}
                                        {...props.baseProps}
                                    />
                                </div>
                            </div>
                        )
                    }
                </ToolkitProvider>
            }
        </div >
    );
}

export default SongDataTable;
