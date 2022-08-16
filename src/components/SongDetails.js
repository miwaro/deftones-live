


function SongDetails({ song, album, lyrics }) {
    return (
        <div style={{ marginTop: '30px' }}>
            <div style={{ color: 'white' }}>Song:{song}</div>
            <br />
            <div style={{ color: 'white' }}>Album:{album}</div>
            <br />

            <div style={{ color: 'white' }}>Lyrics:{lyrics}</div>
        </div >

    )
}

export default SongDetails;