import React from 'react'

import styleback from '../style/cadrs/back.png'
import style_6_hearts from '../style/cadrs/6_hearts.png'


function FieldBottom() {
    return (
        <div  className="field-bottom">
            <div className="field-user" id="field-4">
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
            </div>
            <div className="field-user" id="field-1">
                <div class="user-cards"><img src={style_6_hearts} width="50" alt="card"/></div>
                <div class="user-cards"><img src={style_6_hearts} width="50" alt="card"/></div>
                <div class="user-cards"><img src={style_6_hearts} width="50" alt="card"/></div>
                <div class="user-cards"><img src={style_6_hearts} width="50" alt="card"/></div>
            </div>
            <div className="field-user" id="field-6">
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
                <div class="user-cards"><img src={styleback} width="50" alt="card"/></div>
            </div>
        </div>
    )
}

export default FieldBottom