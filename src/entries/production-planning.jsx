import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import ProductionPlanning from '../pages/ProductionPlanning';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductionPlanning />
  </StrictMode>,
);
