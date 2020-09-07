import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props){

        // this method extend all features of Parent class
        super(props);

        // Declaring State
        this.state = {
            lat: null,
            errorMsg: ''
        };

        // Call this when App component call
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude})
            },
            err => this.setState({ errorMsg: err.message})
        );
    }
    // Must define render for class based components.
    render(){
        
        return (
            <div>
                {
                    this.state.lat ? 
                    <h1>Latitude: {this.state.lat}</h1>
                    :
                    <h1>{this.state.errorMsg}</h1>
                }
                {
                    !this.state.lat && !this.state.errorMsg 
                    ? 
                    <h2>Loading</h2> 
                    : ''
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));