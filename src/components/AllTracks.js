function AllTracks({ showTrackList, encore1, encore2, goBack }) {

    return (
        <div>
            <div className="tablecontain">
                <div className="setlist__container">
                    <div>
                        <h4>Main Set</h4><button className='btn__goBack' onClick={goBack}>Go Back</button>
                        
                        {
                            showTrackList.map((track, i) => {
                                return (
                                    <div key={i} style={{ border: '1px solid #FFF', padding: '5px', backgroundColor: 'rgba(128, 128, 128, 0.636)' }} >
                                        <li className={track.includes('  ') ? 'tape' : ''} style={{ listStyle: 'none', fontWeight: 'bold', padding: '5px 0' }}>{`${i + 1}. ${track}`}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h4>Encore 1</h4>
                        
                        {
                            encore1.map((encore, i) => {
                                return (
                                    <div key={i} style={{ border: '1px solid #FFF', padding: '5px', backgroundColor: 'rgba(128, 128, 128, 0.636)' }}>
                                        <li style={{ listStyle: 'none', fontWeight: 'bold' }}>{`${i + 1}. ${encore}`}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h4>Encore 2</h4>
                        
                        {
                            encore2.map((encore2, i) => {
                                return (
                                    <div key={i}>
                                        <li style={{ listStyle: 'none', fontWeight: 'bold' }}>{`${i + 1}. ${encore2}`}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllTracks;