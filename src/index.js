import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import App from './containers/App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
