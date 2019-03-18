import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className={ styles.hello }>
               <h1 className={ styles.h1 }>Hello, React!</h1>
            </div>
        );
    }
}

export default App;