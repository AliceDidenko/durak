import React from 'react'
import FieldTop from './FieldTop'
import FieldGame from './FieldGame'
import FieldBottom from './FieldBottom'
import users from './Users'

function MainDiv() {
    return (
        <div className="main-field">
            <FieldTop users={users}/>
            <FieldGame/>
            <FieldBottom users={users}/>
        </div>
    )
}

export default MainDiv