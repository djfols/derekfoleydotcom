import React from 'react';
import { useTheme } from '../styles/ThemeContext';
import { LightbulbOutlined, Lightbulb } from '@mui/icons-material';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {
        isDarkMode ? 
        <div className='py-3'>
          <LightbulbOutlined 
            style={{width: "50px", height: "50px"}}
          />
        </div>
          : 
        <div className='py-3'> 
          <Lightbulb 
            style={{width: "50px", height: "50px"}}
          />
        </div>       
      }
    </button>
  );
};

export default DarkModeToggle;