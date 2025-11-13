import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ✅ Function to check if user is on mobile or small screen
function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobile = /android|iphone|ipad|iPod|blackberry|iemobile|opera mini/i.test(userAgent);
  return isMobile || window.innerWidth < 900;
}

// ✅ If user is on mobile -> show message instead of website
if (isMobileDevice()) {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:#0d1117;
      color:white;
      font-family: 'Segoe UI', sans-serif;
      text-align:center;
      padding:20px;
    ">
      <div>
        <h2>⚠️ Desktop Only</h2>
        <p style="font-size:18px;">This website is best viewed on a laptop or desktop.<br/>Please switch to a larger screen 💻</p>
      </div>
    </div>
     `;
} else {
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}

