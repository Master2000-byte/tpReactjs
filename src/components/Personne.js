import React, { Component } from 'react'

class Personne extends Component{
    render() {
        return <div>
            <ul>
                <li>{this.props.matricule}</li>
                <li>{this.props.name}</li>
                <li>{this.props.email}</li>
                <li><img src={this.props.image} alt="no image"/></li>
            </ul>
        </div>
    }
}

export default Personne