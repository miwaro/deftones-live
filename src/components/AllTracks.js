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
                                    <div key={i} className="allTracks">
                                        <li >{`${i + 1}. ${track}`}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="encore">
                        {encore1.length > 0 &&
                            <h4>Encore 1</h4>
                        }

                        {
                            encore1.map((encore, i) => {
                                return (
                                    <div key={i} className="allTracks">
                                        <li>{`${showTrackList.length + (i + 1)}. ${encore}`}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="encore">
                        {encore2.length > 0 &&
                            <h4>Encore 2</h4>
                        }

                        {
                            encore2.map((encore2, i) => {
                                let numOfTracks = showTrackList.length + encore1.length;
                                return (
                                    <div key={i} className="allTracks">
                                        <li>{`${numOfTracks + (i + 1)}. ${encore2}`}</li>
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