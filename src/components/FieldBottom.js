import React from 'react'
import User from './User'

import FieldUser from './FieldUser'
import "../style/avatar.css"
import "../style/cards.css"

function FieldBottom({users}) {
    return (
        <div  className="field-bottom">
            <div className="field-user other-user" id="field-4">
                
                <FieldUser  user={users[3]}/>
                <User user={users[3]}/>
            </div>
            <div className="field-user" id="field-1">
                <FieldUser  user={users[0]}/>
                <User user={users[0]}/>
            </div>
            <div className="field-user other-user" id="field-6">
                <FieldUser  user={users[5]}/>
                <User user={users[5]}/>
            </div>
        </div>
    )
}

export default FieldBottom