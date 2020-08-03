import React from 'react'
import FieldTop from './FieldTop'
import FieldBottom from './FieldBottom'


function MainDiv() {
    return (
        <div className="main-field">
            <FieldTop/>
            <div>npm add jquery</div>
            <FieldBottom/>
        </div>
    )
}

export default MainDiv