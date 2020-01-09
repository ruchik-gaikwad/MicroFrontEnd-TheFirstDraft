import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';



class MyCustomElement extends HTMLElement {
    constructor() {
        console.log("is this getting called ??")
        super();
    }

    // Life Cycle Hooks of the Web Component 
    // Here We are Rendering React Component as the Web Component
    
    connectedCallback() {
        console.log("is this getting called ??")
        ReactDOM.render(<App />, this)
    }
    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this);
    }
}

customElements.define('react-el', MyCustomElement)