import { Suspense } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

export default function Layout({ children }) {
  return (
    <div>
    <Sidebar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
