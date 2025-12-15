import type { ReactNode } from 'react';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Defines the structure: Header + Content + Footer
 */
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layoutContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
