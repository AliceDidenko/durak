import React from 'react'
import cards from './Cards'
import CardBoxUser from './CardBoxUser'

export default function FieldUser( {user} ) {
    let userCards = cards.filter( function userCadrs(card) {
       return card.status === user.id;
    })

    return (
        <CardBoxUser key={user.id} userCards={userCards}/>
    )
}