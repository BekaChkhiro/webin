import './index.css';
import Home from "./pages"
import React from "react"
import ReactDOM from "react-dom/client"

// Initialize React app
const rootElement = document.getElementById("render-react-example-here");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}
