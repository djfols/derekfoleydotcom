import React, {useEffect, useRef} from 'react'
import Section from '../Section';

const Home = () => {
    const logoRef = useRef<HTMLImageElement | null>(null);
    const homeTextContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const logoElement = logoRef.current 
        const homeTextContainer = homeTextContainerRef.current

        const animateLogo = () => {
            if (logoElement) {
                logoElement.classList.add('animated');
              }
            };
        
        const typeDerek = () => {
            const text = 'Derek Foley';
            if (homeTextContainer) {
                homeTextContainer.textContent = ''
                let index = 0;
                const typingInterval = setInterval(() => {
                    homeTextContainer.textContent += text[index];
                    index++;
                if (index === text.length) {
                    clearInterval(typingInterval);
                }
                }, 300)
            }
        }
    
        const animationTimeout = setTimeout(() => {
            animateLogo();
            typeDerek(); 
          }, 1000);
    
        return () => {
          clearTimeout(animationTimeout);
        };
      }, []);
    return(
        <div className='flex'>
            <Section>
                <div className='centered-row'>
                    <img className='logo' ref={logoRef} style={{width: '100px'}}/>
                    <div className='font-jetBrains tracking-widest text-6xl' ref={homeTextContainerRef}></div>   
                </div>
            </Section>
        </div>
    )
}

export default Home;