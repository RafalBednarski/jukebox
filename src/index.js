import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';//passes data from APP to STORE
import {createStore} from 'redux';//out-of-the-box function from REDUX. We must create store witch all REDUCERS

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(//PROVIDER wrap entire APP and passes in PROPS access to STORE
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, document.querySelector('#root')
);//invoke CREATESTORE and connect all REDUCERS
//and ammadiedly passes access to store for entire APP