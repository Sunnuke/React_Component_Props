import React, { Component } from "react";


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.a1,
        };
    }
    
    Bday = () =>  {
        let newAge = this.state.age + 1;
        this.setState({ age: newAge });
    }
    render() {
        return(
            <div>
                
                <h1>{this.props.ln1}, {this.props.fn1}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hc1}</p>
                <button onClick={ this.Bday }>Birthday Button for {this.props.fn1} {this.props.ln1}</button>
                
            </div>
        )
    }
}

export default PersonCard;