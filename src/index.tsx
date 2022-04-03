import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';
import './index.st.css';

createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
