import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

<<<<<<< Updated upstream
import './index.scss';
=======
import '@styles/global.scss'
import './index.scss'
>>>>>>> Stashed changes

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
