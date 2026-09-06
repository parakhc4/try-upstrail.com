import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import DemandPlanning from '../pages/DemandPlanning';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemandPlanning />
  </StrictMode>,
);
