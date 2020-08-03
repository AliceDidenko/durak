import React from 'react'

import '../style/style.css'

function NumberUserInput() {
    return (
        <div className="numberUserInput">
            <div    className="in-inline text">число игроков</div>
            <input  className="in-inline"      id="num"        type="range" min="2" max="6" step="1" onInput={funcValue}/>
            <input  className="in-inline text" id="rangeValue" type="text"  value="2" readonly/>
        </div>
    )
}

function funcValue() {
    document.getElementById('rangeValue').value = document.getElementById('num').value;
}

export default NumberUserInput