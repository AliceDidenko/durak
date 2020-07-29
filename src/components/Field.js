import React, {Component} from 'react'
// import avatars from "../avatar-images/anubis.png"
// <img src = {avatars} alt={user.title} title={user.title}></img> // h2

class Field extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isOpen: true
    //     }
    //     this.handleClick = handleClick.bind(this)
    // }

    state = {
        isOpen: true
    }

    render() {
        const {user} = this.props
        console.log('---+---', this.props)
        const body = this.state.isOpen && <section>{user.cards}</section>

        return (
            <div className="field-user" style={{ color: "white"}}>
                {user.id}
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close': 'open'}
                </button>
                {body}
            </div>
        )
    }

    handleClick = () => {
        console.log("clicked")
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Field