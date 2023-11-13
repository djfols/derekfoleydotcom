export interface Job {
    jobTitle: string,
    employer: string,
    location: string,
    startDate: string,
    endDate: string,
    details: string[]
}

const workHistory: Job[] = [
    {
      jobTitle: 'Software Engineer',
      employer: 'Roofsnap',
      location: 'Columbus, OH',
      startDate: '2021',
      endDate: 'Present',
      details: [
        'Develop and maintain roof sketching web application and estimating platform using React, JavaScript, TypeScript, SQL, and .NET utilizing Azure to build and release features',
        'Created end-to-end tests using Cypress and unit tests using Jest',
        'Reviewed pull requests and helped plan sprints in an agile environment',
      ],
    },
    {
      jobTitle: 'Web Developer',
      employer: 'Independent Contractor',
      location: 'USA',
      startDate: '2020',
      endDate: '2021',
      details: [
        'Designed and engineered websites for professionals, small businesses, artists, and start-ups.',
      ],
    },
    {
      jobTitle: 'Support Engineer',
      employer: 'Gilson Company',
      location: 'Lewis Center, OH',
      startDate: '2018',
      endDate: '2019',
      details: [
        'Supported sales and customers with technical problems related to materials testing equipment and methods',
        'Reviewed and advised on ASTM, AASHTO, and ISO methods',
      ],
    },
    {
      jobTitle: 'Geologist',
      employer: 'Ohio Geological Survey',
      location: 'Columbus, OH',
      startDate: '2017',
      endDate: '2018',
      details: [
        'Utilized applications such as ArcGIS and Petra to research and map critical formations for groundwater and oil and gas in Ohio',
        'Presented research and gave educational talks about Ohio geology to government and industry professionals',
      ],
    },
  ];
  

export default workHistory;