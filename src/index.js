import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
export {default as Board} from './component/board';
export {default as Main} from './component/main'

ReactDOM.render(<App />, document.getElementById('root'));

