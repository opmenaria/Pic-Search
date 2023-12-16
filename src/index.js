import React from "react";
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from "react-dom/client"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div style={{ background: '#d3d0d0', minHeight: "100vh" }}>
        <App />
    </div>
);