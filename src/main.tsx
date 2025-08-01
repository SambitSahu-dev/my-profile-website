import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react'; // ✅ Add this line

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics /> {/* ✅ Add this line inside the render tree */}
  </StrictMode>
);
