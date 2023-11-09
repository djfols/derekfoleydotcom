import React, { ReactNode, PropsWithChildren  } from 'react'
interface SectionProps {
    sectionStyle?: string | undefined,
    children: ReactNode
}
const Section = (props: PropsWithChildren<SectionProps>) => {

    const {sectionStyle, children} = props;

    return(
        <div className={`${sectionStyle ? sectionStyle + 'px-4' : 'px-4'}`}>
            <div style={{height: '100vh'}}>
                {children}
            </div>
        </div>
    )
}

export default Section;