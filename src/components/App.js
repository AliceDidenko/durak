import React from 'react'
import Header from './Header'
import MainDiv from './MainDiv'
import Fields from './Fields'
import users from '../Users'


function App() {
    return (
        <div>
            <Header/>
            <MainDiv id="MainDiv"/>
            <div><Fields users={users}/></div>
        </div>
    )
}

export default App