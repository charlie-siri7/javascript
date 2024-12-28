// Imports
// StrictMode to highlight potential issues in app
// React imports and app import from same folder
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Chakra Provider
import { Provider } from "@/components/ui/provider"
// BrowserRouter to keep UI in sync with URL
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
