import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Resume, Layout} from './components/Pages/index';
import { useTheme } from './styles/ThemeContext';
import './styles/styles.css'

const App: React.FC = () => {

  const { isDarkMode } = useTheme(); 

  return (
    <Router>
    <div className={isDarkMode ? 'theme-dark' : 'theme-light'}
      style={{
        width:'100vw',
        height: '100vh',
        margin: '0 auto'
      }}
    > 
        <main>
          <Routes>
            <Route path="/" element={
              <Layout>
                <Home />
              </Layout>}
            />
            <Route path="/resume" element={
              <Layout>
                <Resume />
              </Layout>} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
