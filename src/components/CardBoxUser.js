import React, {Component} from 'react'
import "../style/cards.css"

import card_6_clubs from "../style/cards/card_6_clubs.png"
import card_7_clubs from "../style/cards/card_7_clubs.png"
import card_8_clubs from "../style/cards/card_8_clubs.png"
import card_9_clubs from "../style/cards/card_9_clubs.png"
import card_10_clubs from "../style/cards/card_10_clubs.png"
import card_J_clubs from "../style/cards/card_J_clubs.png"
import card_Q_clubs from "../style/cards/card_Q_clubs.png"
import card_K_clubs from "../style/cards/card_K_clubs.png"
import card_A_clubs from "../style/cards/card_A_clubs.png"

import card_6_hearts from "../style/cards/card_6_hearts.png"
import card_7_hearts from "../style/cards/card_7_hearts.png"
import card_8_hearts from "../style/cards/card_8_hearts.png"
import card_9_hearts from "../style/cards/card_9_hearts.png"
import card_10_hearts from "../style/cards/card_10_hearts.png"
import card_J_hearts from "../style/cards/card_J_hearts.png"
import card_Q_hearts from "../style/cards/card_Q_hearts.png"
import card_K_hearts from "../style/cards/card_K_hearts.png"
import card_A_hearts from "../style/cards/card_A_hearts.png"

import card_6_diamonds from "../style/cards/card_6_diamonds.png"
import card_7_diamonds from "../style/cards/card_7_diamonds.png"
import card_8_diamonds from "../style/cards/card_8_diamonds.png"
import card_9_diamonds from "../style/cards/card_9_diamonds.png"
import card_10_diamonds from "../style/cards/card_10_diamonds.png"
import card_J_diamonds from "../style/cards/card_J_diamonds.png"
import card_Q_diamonds from "../style/cards/card_Q_diamonds.png"
import card_K_diamonds from "../style/cards/card_K_diamonds.png"
import card_A_diamonds from "../style/cards/card_A_diamonds.png"

import card_6_spades from "../style/cards/card_6_spades.png"
import card_7_spades from "../style/cards/card_7_spades.png"
import card_8_spades from "../style/cards/card_8_spades.png"
import card_9_spades from "../style/cards/card_9_spades.png"
import card_10_spades from "../style/cards/card_10_spades.png"
import card_J_spades from "../style/cards/card_J_spades.png"
import card_Q_spades from "../style/cards/card_Q_spades.png"
import card_K_spades from "../style/cards/card_K_spades.png"
import card_A_spades from "../style/cards/card_A_spades.png"

class CardBoxUser extends Component {
    render() {
        const {userCards} = this.props
        //console.log('CardBoxUser ---+---', this.props)

        const arr_all_cards = [
            ['card_6_clubs', {card_6_clubs}], ['card_7_clubs', {card_7_clubs}], ['card_8_clubs', {card_8_clubs}],['card_9_clubs', {card_9_clubs}],
            ['card_10_clubs', {card_10_clubs}],['card_J_clubs', {card_J_clubs}],['card_Q_clubs', {card_Q_clubs}],['card_K_clubs', {card_K_clubs}],['card_A_clubs', {card_A_clubs}],
    
            ['card_6_hearts', {card_6_hearts}],['card_7_hearts', {card_7_hearts}],['card_8_hearts', {card_8_hearts}],['card_9_hearts', {card_9_hearts}],
            ['card_10_hearts', {card_10_hearts}],['card_J_hearts', {card_J_hearts}],['card_Q_hearts', {card_Q_hearts}],['card_K_hearts', {card_K_hearts}],['card_A_hearts', {card_A_hearts}],
    
            ['card_6_diamonds', {card_6_diamonds}],['card_7_diamonds', {card_7_diamonds}],['card_8_diamonds', {card_8_diamonds}],['card_9_diamonds', {card_9_diamonds}],
            ['card_10_diamonds', {card_10_diamonds}],['card_J_diamonds', {card_J_diamonds}],['card_Q_diamonds', {card_Q_diamonds}],['card_K_diamonds', {card_K_diamonds}],['card_A_diamonds', {card_A_diamonds}],
    
            ['card_6_spades', {card_6_spades}],['card_7_spades', {card_7_spades}],['card_8_spades', {card_8_spades}],['card_9_spades', {card_9_spades}],
            ['card_10_spades', {card_10_spades}],['card_J_spades', {card_J_spades}],['card_Q_spades', {card_Q_spades}],['card_K_spades', {card_K_spades}],['card_A_spades', {card_A_spades}],
        ]
        

        let arrURL_cards = userCards.map ( function(card) {
            return (
                arr_all_cards.filter(function(elem) {
                    return elem[0] === card.id;
                })
            )
        })

        let index = 0
        let div_img_card = arrURL_cards.map( function(i) {
            let name_cards = i[0][0]
            let obj_cards = i[0][1]
            let URL_cards = obj_cards[name_cards]
            index += 1
            
            let classes = "user-cards " + index
            //console.log("classes = ", classes)

            return ( 
                <div key={name_cards} className={classes}>
                    <img src={URL_cards} alt='card' title="card" className="imgCards"/>
                </div>
            )
        })

        return ( <div className="fieldUser">{div_img_card}</div> )
    }
    
}

export default CardBoxUser