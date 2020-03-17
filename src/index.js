import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ThemeContext from "./context/themeContext";

ReactDOM.render(<ThemeContext> <App /> </ThemeContext>, document.getElementById('root'));

