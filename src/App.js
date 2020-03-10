import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Board, Main} from "./index";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Main}/>
                <Route exact path="/board" component={Board}/>
            </BrowserRouter>

        </div>
    );
}

export default App;
