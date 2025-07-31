import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout.jsx';

const HomePage = lazy(() => import('../../Pages/HomePage.jsx'));
const PhoneBookPage = lazy(() => import('../../Pages/PhoneBookPage.jsx'));

export default function App () {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phoneBook" element={<PhoneBookPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
    </Layout>
  );
};
