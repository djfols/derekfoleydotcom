import React, { useState, ReactNode } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const SideBar = ({ children}: {children: ReactNode} ) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className={`fixed inherit-width`} >
            {
                isSidebarOpen
                ?  
                <div className="sidebar-content">
                    <KeyboardArrowLeftIcon
                        className="sidebar-icon"
                        onClick={toggleSidebar}
                        style={{width: "40px", height: "40px"}}
                    />
                    <div className="centered-flex-column">
                        {children}
                    </div>
                </div>
                :
                <KeyboardArrowRightIcon 
                    className="sidebar-icon"
                    onClick={toggleSidebar}
                    style={{width: "40px", height: "40px"}}
                />
            }
        </div>
    </div>
    )
}

export default SideBar;