import React from 'react'
import Field from './Field'

export default function Fields( {users} ) {
    const userElements = users.map(
        function functser(user) {
            return <div key = {user.id} id={user.id} className="for-2 for-3 for-4 for-5 for-6"><Field user={user}/></div>
        }
    )
        
    //map( user() => <li><Field user={user} /></li>)

    return (
        <div> {userElements} </div>
    )
}