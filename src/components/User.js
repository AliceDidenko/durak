import React, {Component} from 'react'
import anubis from "../style/avatar-images/anubis.png"
import cat from "../style/avatar-images/cat.png"
import eye from "../style/avatar-images/eye.png"
import fish from "../style/avatar-images/fish.png"
import homer from "../style/avatar-images/homer.png"
import jake from "../style/avatar-images/jake.png"
import octopus from "../style/avatar-images/octopus.png"
import penguin from "../style/avatar-images/penguin.png"
import totem from "../style/avatar-images/totem.png"
import unicellular from "../style/avatar-images/unicellular.png"
import unicorn from "../style/avatar-images/unicorn.png"
import vegetable from "../style/avatar-images/vegetable.png"
import "../style/avatar.css"

class User extends Component {

    render() {
        const {user} = this.props
        //console.log('User ---+---', this.props)

        const arr = [
            ["anubis",      {anubis}],
            ["cat",         {cat}],
            ["eye",         {eye}],
            ["fish",        {fish}],
            ["homer",       {homer}],
            ["jake",        {jake}],
            ["octopus",     {octopus}],
            ["penguin",     {penguin}],
            ["totem",       {totem}],
            ["unicellular", {unicellular}],
            ["unicorn",     {unicorn}],
            ["vegetable",   {vegetable}],
            
        ]
        let arrURL_avatar = arr.filter(function(elem) {
            return elem[0] === user.avatar;
        });
        let name_avatar = arrURL_avatar[0][0]
        let obj_avatar = arrURL_avatar[0][1]
        let URL_avatar = obj_avatar[name_avatar]
        //console.log(name_avatar)

        
        return (
            <div key="user.id">
                <img className="avatar" src={URL_avatar} alt={user.avatar} title={user.title}/>
            </div>
        )
    }
}

export default User