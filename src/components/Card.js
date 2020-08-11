import React, {Component} from 'react'
import "../style/cards.css"

class Card extends Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <div className="card-3d">
                        <div className="front"></div>
                        <div className="back"></div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card