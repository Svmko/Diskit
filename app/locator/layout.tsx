import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Store Locator</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-4">{children}</main>
      <footer className="bg-white shadow mt-4">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Store Locator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;