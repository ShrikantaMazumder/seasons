import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        lat: null,
        errorMsg: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMsg: err.message})
        );
    }
    // Must define render for class based components.
    render(){
        
        return (
            <div>
                {
                    this.state.lat ? 
                    <SeasonDisplay lat={this.state.lat} />
                    :
                    <h1>{this.state.errorMsg}</h1>
                }
                {
                    !this.state.lat && !this.state.errorMsg 
                    ? 
                    <Spinner message={'Please accept location request.'} /> 
                    : ''
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));