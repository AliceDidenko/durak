import React from 'react'
import User from './User'

import FieldUser from './FieldUser'
import "../style/avatar.css"
import "../style/cards.css"

function FieldTop({users}) {
    return (
        <div  className="field-top">
            <div className="field-user other-user" id="field-5">
                
                <FieldUser  user={users[4]}/>
                <User user={users[4]}/>
            </div>
            <div className="field-user other-user" id="field-2">
                <FieldUser  user={users[1]}/>
                <User user={users[1]}/>
            </div>
            <div className="field-user other-user" id="field-3">
                <FieldUser  user={users[2]}/>
                <User user={users[2]}/>
            </div>
        </div>
    )
}

export default FieldTop