import React from 'react'

import styleback from '../style/cadrs/back.png'

function FieldTop() {
    return (
        <div  className="field-top">
            <div className="field-user" id="field-5">
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
            </div>
            <div className="field-user" id="field-2">
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
            </div>
            <div className="field-user" id="field-3">
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
            </div>
        </div>
    )
}

export default FieldTop