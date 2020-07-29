import React from 'react'
import Fields from './Fields'
import users from '../Users'

function App() {
    return (
        <div >
            <div><Fields users={users}/></div>
        </div>
        
    )
}

export default App