import React from 'react'
import NumberUserInput from './NumberUserInput'
import GameStatus from './GameStatus'

import '../style/header.css'

function Header() {
    return (
        <div className="head">
            <div className="container">
            <NumberUserInput className="inline" />
            <GameStatus      className="inline" />
        </div>
        </div>
    )
}

export default Header