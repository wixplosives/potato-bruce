import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import './index.st.css';

const container = document.body.appendChild(document.createElement('div'));
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    container
);
