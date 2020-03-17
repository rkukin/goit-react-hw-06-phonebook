import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store'


import ThemeContext from "./context/themeContext";

ReactDOM.render(
    <Provider store={store}>
        <ThemeContext>
            <App />
        </ThemeContext>
    </Provider>, document.getElementById('root'));

