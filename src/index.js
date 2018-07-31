import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import TheLazyFoodie from './TheLazyFoodie';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <React.Fragment>
            <TheLazyFoodie />
        </React.Fragment>
    </Router>,
        document.getElementById('root'));
// registerServiceWorker();
