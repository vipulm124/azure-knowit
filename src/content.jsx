import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContentScript from './contentScript/contentScript'


  
const urlhash = window.location.hash;
const resourceCreationHeading = urlhash.split('/').pop();


const root = document.createElement("div");
root.id = "azure-knowit";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ContentScript resourceCreationHeading={resourceCreationHeading} />
  </React.StrictMode>
);