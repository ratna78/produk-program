import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import axios from 'axios';
import {Provider} from 'react-redux';
import  {store} from './store/index.js';

axios.defaults.headers.post["Content-Type"] = 
 "application/x-www-form-urlencoded";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = import.meta.env.VITE_API_TIMEOUT;

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
    </StrictMode>
    
);

 //. , ; : ! ? ' " ( ) [ ] { } - _ = + / \ | @ # $ % ^ & * ~ `
//+ − × ÷ = ≠ < > ≤ ≥ ± √ ∞ ∑ ∏ ∆ ∂ ∫ ≈ ∝ %
//$ € £ ¥ ₩ ₫ ₹ ₱ ₴ ₭ ₦ ₲ ₪ ₵
//© ® ™ ° ‰ § ¶ • 
