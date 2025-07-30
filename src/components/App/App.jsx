import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../Pages/HomePage.jsx'));
const PhoneBookPage = lazy(() => import('../../Pages/PhoneBookPage.jsx'));

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phoneBook" element={<PhoneBookPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
    </div>
  );
};
