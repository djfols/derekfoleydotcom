import React, { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom'
import SideBar from './SideBar/SideBar';
import DarkModeToggle from './DarkModeToggle';
import { Home, Description } from '@mui/icons-material';
import { Resume } from './Pages';
import { useTheme } from '../styles/ThemeContext';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
const { isDarkMode } = useTheme(); 

  return (
<div className='flex'>
        <SideBar>
            <div className='py-3'>
                <Link to="/">
                    <Home style={{width: "50px", height: "50px"}}/>
                </Link>
            </div>
            <div className='py-3'>
                <Link to="/resume">
                    <Description style={{width: "50px", height: "50px"}}/>
                </Link>
            </div>
            <DarkModeToggle />
        </SideBar>      
        <div className="content" style={{ zIndex: 100 }}>
            {children}
        </div>
        <div>
            <div 
                className='animatedDiv'
                style={{ zIndex: 1, borderTop: '50vh solid transparent', borderRight: '50vw solid var(--dk-blue)'}}
            />
            <div 
                className='animatedDiv'
                style={{ 
                    zIndex: 2, 
                    borderTop: '38vh solid transparent', 
                    borderRight: '38vw solid var(--teal)', 
                    animationDelay: '0.8s'}} 
            />
            <div 
                className='animatedDiv'
                style={{ 
                    zIndex: 3, borderTop: '26vh solid transparent', 
                    borderRight: '26vw solid var(--lt-green)', 
                    animationDelay: '1.6s'}} 
            />
        </div>
    </div>
  );
};

export default Layout;