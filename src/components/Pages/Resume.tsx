import React from 'react'
import Section from '../Section';
import workHistory, {Job} from '../../lib/WorkHistory';

const Resume = () => {
    return(
        <Section>
            <div className='centered-row'>
                <p className='font-sans text-5xl py-6 tracking-wide'>Resume</p>
            </div>
            <div className='px-3 font-sans'>
                <div>
                    <p className='text-2xl'>Work Experience</p>
                </div>
                <div className='px-3 py-2'>
                   {
                    workHistory.map((job: Job, index: number) => {
                        return(
                            <div key={index} className='text-lg py-3'>
                                <p>{job.jobTitle} - {job.employer}</p>
                                <p>{job.location} - {job.startDate} to {job.endDate}</p>
                                <div className='px-6'>
                                    <ul>
                                        {
                                            job.details.map((detail: string, index) => {
                                                return(
                                                    <li className='text-base' key={index}>
                                                        <p>{detail}</p>
                                                    </li>
                                                )
                                            })

                                        }
                                    </ul>
                                </div> 
                            </div>
                        )
                    })
                   } 
                </div>
            </div>
        </Section>
    )
}

export default Resume;