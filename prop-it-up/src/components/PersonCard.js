import React, { Component } from "react";


class PersonCard extends Component {
    render() {
        return(
            <div>
                
                <h1>{this.props.ln1}, {this.props.fn1}</h1>
                <p>Age: {this.props.a1}</p>
                <p>Hair Color: {this.props.hc1}</p>
                
            </div>
        )
    }
}

export default PersonCard;