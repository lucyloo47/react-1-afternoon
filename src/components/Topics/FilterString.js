import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
    super();

    this.state = {
    animals: ['dog', 'cat', 'horse','llama','chicken','moose'],
    userInput: '',
    filteredAnimals: []
        };
    }

    handleChange(val){
        this.setState ({ userInput: val });
    }

    filterAnimals(userInput){
        var animals = this.state.animals;
        var filteredAnimals = [];

        for (var i = 0; i<animals.length; i++){
            if ( animals[i].includes(userInput) ){
                filteredAnimals.push(animals[i]);
            }
        } 

        this.setState({ filteredAnimals: filteredAnimals });
    }

    render () {
        return (
            <div className= 'puzzleBox filterStringPB'>

            <h4> Filter String </h4>

            <span className= 'puzzleText'> Animals: {JSON.stringify(this.state.animals, null, 10)}</span>

            <input className= 'inputLine' onChange = { (e) => this.handleChange(e.target.value) }></input>

            <button className= 'confirmationButton' onClick = { () => this.filterAnimals(this.state.userInput)}> Filter </button>

            <span className= 'resultsBox filterStringRB'> Filtered Animals: {JSON.stringify(this.state.filteredAnimals, null, 10)}</span>            
            </div>
        )
    }
}