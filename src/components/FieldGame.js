import React from 'react'
import FieldActions from './FieldActions'
import FieldCardDeck from './FieldCardDeck'
import Card from './Card'


function FieldGame() {
    return (
        <div className="FieldGame">
            <FieldActions/>
            <Card className="imgCards other-user"/>
            <FieldCardDeck/>
        </div>
    )
}

export default FieldGame