import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Header = () => {
    return <h1>Hello Rugs USA!</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
