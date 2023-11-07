import React, { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom'
import SideBar from './SideBar/SideBar';
import DarkModeToggle from './DarkModeToggle';
import { Home, Description } from '@mui/icons-material';
import { Resume } from './Pages';
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className="flex">
        <SideBar>
            <Link to="/">
                <Home />
            </Link>
            <Link to="/resume">
                <Description />
            </Link>
            <DarkModeToggle />
        </SideBar>      
        <div className="content">
            {children}
        </div>
    </div>
  );
};

export default Layout;