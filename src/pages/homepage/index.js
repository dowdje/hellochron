import React, { Component }  from 'react';
import Helmet from 'react-helmet';
import greeting from './greetings.js';

/**
 * Homepage
 */
class Homepage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>CNN React Starter Homepage</title>
                </Helmet>
                <h1>{greeting} Chron</h1>
            </div>
        );
    }
}

export default Homepage;
