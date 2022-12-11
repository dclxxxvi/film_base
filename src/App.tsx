import React from 'react';
import FilmPage from "./FilmPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
    return (
        <Provider store={ store }>
            <FilmPage/>
        </Provider>
    );
}

export default App;
