import React from 'react';
import axios from 'axios';
import './App.css'

class App extends React.Component {
    state = { quote: '' };

    componentDidMount() {
        this.fetchQuote();
    }

    fetchQuote = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;

                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1></h1>
                </div>
            </div>
        );
    }
}

export default App;