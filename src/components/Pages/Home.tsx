import React from 'react'
import SideBar from '../SideBar/SideBar';
import DarkModeToggle from '../DarkModeToggle';
import Section from '../Section';

const Home = () => {

    return(
        <div className='flex'>
            {/* <SideBar>
                <DarkModeToggle />
            </SideBar> */}
            <Section />
        </div>
    )
}

export default Home;