import React from 'react';
import Button from '../../components/atoms/Button/Button';
import './HomePage.css';

export const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="home">
        <h1 className="home-title">Welcome to the React Project</h1>
        <p className="home-description">
          This is a React project with TypeScript, configured with Vite, ESLint, Prettier and
          Vitest. The structure follows Atomic Design.
        </p>

        <div className="home-actions">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
        </div>

        <div className="home-info">
          <h2>Project Structure (Atomic Design)</h2>
          <ul>
            <li>
              <strong>Atoms:</strong> Basic components (ex: Button)
            </li>
            <li>
              <strong>Organisms:</strong> Complex sections (ex: Header, Footer)
            </li>
            <li>
              <strong>Templates:</strong> Page structures (ex: MainLayout)
            </li>
            <li>
              <strong>Pages:</strong> Complete pages (ex: HomePage)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
