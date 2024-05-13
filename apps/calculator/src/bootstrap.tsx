import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from "@react-app/shared"
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
