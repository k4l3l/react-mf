import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import { AppHeader } from '@react-app/shared';

const Calculator = React.lazy(() => import('calculator/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <AppHeader title={"React calculator"} />
      <Routes>
        <Route path="/" element={<FrontPage />} />

        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
