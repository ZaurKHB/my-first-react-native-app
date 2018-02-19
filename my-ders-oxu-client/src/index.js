import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer  from './store/reducer'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

export default store

ReactDOM.render(<Provider sore={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
