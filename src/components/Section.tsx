import React from 'react'

interface SectionProps {
    sectionStyle?: string | undefined
}
const Section = (props: SectionProps) => {
    return(
        <div className={`${props.sectionStyle ? props.sectionStyle + ' px-4' : 'px-4'}`}>
            <div style={{height: '100vh'}}>
                STUFF
            </div>
        </div>
    )
}

export default Section;