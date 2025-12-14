import type { ReactNode } from 'react';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Defines the structure: Header + Content + Footer
 */
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
