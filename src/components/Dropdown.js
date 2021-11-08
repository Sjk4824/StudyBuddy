import React, {useState} from 'react'

function Dropdown(props) {

    const [selectedValue, setSelectedValue] = useState("");

    return (
        <div className="dropdown" style={{zIndex : "10"}}>
            <select value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                {props.options.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
            </select>
            <p>{selectedValue}</p>
        </div>
    )
}

export default Dropdown
