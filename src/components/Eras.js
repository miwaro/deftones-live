import React, { useState, useEffect } from 'react';

function Eras({ displayEra }) {
    const [selectedEra, setSelectedEra] = useState("");

    useEffect(() => {
        let era = selectedEra;
        switch (era) {
            case "Early Days":
                displayEra('1988-01-01', '1994-01-01')
                break;
            case "Adrenaline":
                displayEra('1994-01-01', '1997-01-01')
                break;
            case "Around the Fur":
                displayEra('1997-01-01', '1999-01-01')
                break;
            case "White Pony":
                displayEra('1999-01-01', '2003-01-01')
                break;
            case "Deftones":
                displayEra('2003-01-01', '2006-01-01')
                break;
            case "Saturday Night Wrist":
                displayEra('2006-01-01', '2008-01-01')
                break;
            case "Eros":
                displayEra('2008-01-01', '2009-01-01')
                break;
            case "Diamond Eyes":
                displayEra('2009-01-01', '2012-01-01')
                break;
            case "Koi No Yokan":
                displayEra('2012-01-01', '2016-01-01')
                break;
            case "Gore":
                displayEra('2016-01-01', '2020-01-01')
                break;
            case "Ohms":
                displayEra('2020-01-01', '2023-01-01')
                break;
            default:
                break;
        }
    }, [selectedEra])

    const handleEraChange = (e) => {
        setSelectedEra(e.target.value);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'left', paddingLeft: '60px', paddingBottom: '10px' }}>
            <label style={{ color: 'white', paddingRight: '50px' }}>Select Era</label>
            <select value={selectedEra} onChange={handleEraChange}>
                <option value={"All"}>All Eras (1988-2022)</option>
                <option value={"Early Days"}>Early Days (1988-1994)</option>
                <option value={"Adrenaline"}>Adrenaline (1994-1997)</option>
                <option value={"Around the Fur"}>Around the Fur (1997-1999)</option>
                <option value={"White Pony"}>White Pony (1999-2003)</option>
                <option value={"Deftones"}>Deftones (2003-2006)</option>
                <option value={"Saturday Night Wrist"}>Saturday Night Wrist (2006-2008)</option>
                <option value={"Eros"}>Eros (2008-2009)</option>
                <option value={"Diamond Eyes"}> (2009-2012)</option>
                <option value={"Koi No Yokan"}>Koi No Yokan (2012-2016)</option>
                <option value={"Gore"}>Gore (2016-2020)</option>
                <option value={"Ohms"}>Ohms (2020-2022)</option>
            </select>
        </div>
    )
}

export default Eras;