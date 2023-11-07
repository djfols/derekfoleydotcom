import React from 'react';
import { useTheme } from '../styles/ThemeContext';
import { LightbulbOutlined, Lightbulb } from '@mui/icons-material';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {
        isDarkMode ? 
        <div>
          <LightbulbOutlined 
            style={{width: "40px", height: "40px"}}
          />
        </div>
          : 
        <div> 
          <Lightbulb 
            style={{width: "40px", height: "40px"}}
          />
        </div>       
      }
    </button>
  );
};

export default DarkModeToggle;