import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface JobItem {
  from: string
  until: string
  company: string
  webpage: string
  division: string | null
  city: string
  position: string
  references: string[]
  keywords: string[]
  tasks: string[]
  accomplishments: string[],
  skills: string[],
}

const jobs: JobItem[] = [
  {
    from: 'March 2022',
    until: 'Now',
    company: 'NuMat Technologies, Inc.',
    webpage: 'http://numat-tech.com/',
    division: 'IT',
    city: 'Skokie, IL',
    position: 'Senior Software Engineer',
    references: ['Patrick Fuller pat@numat-tech.com', 'Paul Boone paul.boone@numat-tech.com'],
    keywords: ['web developer', 'fullstack', 'Django', 'Python', 'Azure Pipelines'],
    tasks: [
      'Maintain software for chemical research and processing',
      'REST API integration of R&D solutions'
    ],
    accomplishments: ['Integration of E-Lab Notebook, Chemical Inventory and Laboratory systems.',
      'Implementation of a Company Portal for internal use.',
      'Refactoring and testing of legacy code.'],
    skills: ['Python', 'Django', 'React', 'RestAPI', 'Docker', 'Swarm'
    ]
  },
  {
    from: 'Jan 2021',
    until: 'Feb 2022',
    company: 'Fermi National Accelerator Laboratory (Fermilab)',
    webpage: 'http://fnal.gov/',
    division: 'Accelerator Division',
    city: 'Batavia, IL',
    position: 'Applications Developer & Systems Analyst',
    references: ['Erik Gottschalk egottschalk@fnal.gov'],
    keywords: ['web developer', 'fullstack', 'React', 'Node.js', 'GraphQL'],
    tasks: ['Do use case analysis for accelerator controls modernization.',
      'Develop software for accelerator controls.'],
    accomplishments: ['Use cases and functional requirements for new control system.',
      'Refurbish of physical key inventory tracking tool.'],
    skills: ['React',
      'Node.js', 'Express',]
  },
  {
    from: 'Jan 2016',
    until: 'Dec 2020',
    company: 'Fermi National Accelerator Laboratory (Fermilab)',
    webpage: 'http://fnal.gov/',
    division: 'Office of Project Support Services',
    city: 'Batavia, IL',
    position: 'Applications Developer',
    references: ['Richard Marcum rmarcum@fnal.gov'],
    keywords: ['web developer', 'fullstack', 'ASP.Net', 'MVC', 'Razor', 'SQLServer', 'project controls', 'EVMS'],
    tasks: ['Design and build full-stack web tools for the projects office.',
      'Support and maintain existing software tools.'],
    accomplishments: ['Refactoring and design from scratch of three web tools: fBCR, CAMeToolbox, RAPTR, that automated and improved intensive manual tasks of project controls.',
      'Exceptional Performance Recognition Award (2018)'],
    skills: ['ASP.Net', 'MVC', 'SqlServer', 'JavaScript', 'JQuery']
  },
  {
    from: 'Sept 2013',
    until: 'Dec 2015',
    company: 'European Organization for Nuclear Research (CERN)',
    webpage: 'http://home.web.cern.ch/',
    division: 'CMS Experiment - Computing Operations',
    city: 'Geneva, Switzerland',
    position: 'Workflow Team Leader',
    references: ['Oliver Gustche gutsche@fnal.gov,  gutsche@cern.ch',
      'Maria Girone maria.girone@cern.ch'],
    keywords: ['devops', 'grid', 'python', 'bash', 'linux', 'oracle', 'large scale', 'condor', 'couchdb'],
    tasks: ['DevOps of Monte Carlo simulation workflows on the CMS Grid.',
      'Debugging / troubleshooting on Linux/Python grid platform.'],
    accomplishments: ['Performance optimization on several operational tools.',
      'Automation of manual tasks that were laborious for operators and error-prone.',
      'Tide-up, maintenance and documentation of legacy operations code.'],
    skills: ['Python', 'REST API', 'Bash', 'Oracle', 'CouchDB']
  },
  {
    from: 'Jan 2011',
    until: 'Jul 2013',
    company: 'Politecnico Grancolombiano',
    webpage: 'https://www.poli.edu.co/',
    division: 'Facultad de Ingenieria',
    city: 'Bogota, Colombia',
    position: 'Teacher',
    references: ['Rafael García, rgarcia@poli.edu.co'],
    keywords: ['teaching', 'maths', 'algorithms', 'java', 'cryptography', 'distributed', 'programming'],
    tasks: ['Algorithm analysis and correction.',
      'Logics and Maths for Computing Science',
      'Programming in Java',
      'Distributed systems', 'Cryptography'],
    accomplishments: ['Systems Engineering’s best teacher award, rated by students.',
      'Design of graduate degree in information security.'],
    skills: ['Java', 'Python']
  },
  {
    from: 'Sept 2007',
    until: 'Dec 2010',
    company: 'cyte',
    webpage: 'https://www.poli.edu.co/',
    division: null,
    city: 'Bogota, Colombia',
    position: 'Software Development Leader',
    references: ['Milton Quiroga, mquiroga@cyte.co'],
    keywords: ['security', 'cryptography', 'pki', 'digital signatures', 'software', 'java', 'information security', 'j2ee', 'consulting'],
    tasks: ['Design, develop and support software applications intended to secure our client’s information.',
      'Provide expertise in consulting projects about information security, awareness, information classifying, business continuity planning and information technology risk analysis.'],
    accomplishments: ['Refactoring and improvement of the company\'s cryptographic products',
      'Design of new products based on client\'s needs.',
      'Leading security-related consulting.'],
    skills: ['SQLServer', 'JavaEE', 'Javascript']
  }
];

/**
 * 
 * @returns the Experience component
 */
export default function Experience() {
  return (
    <div className="Experience slideDown">
      {jobs.map((job, i) => <Job jobData={job} key={i} />)}
    </div>
  )
}

interface JobProps {
  jobData: JobItem;
}

interface JobState {
  expanded: boolean;
}

class Job extends React.Component<JobProps, JobState> {
  constructor(props: JobProps) {
    super(props);
    this.flip = this.flip.bind(this);
    this.state = { expanded: false };
  }

  flip() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { jobData } = this.props;
    const { expanded } = this.state;
    return (
      <Card className='m-3'>
        <Card.Header>
          {jobData.company}
          <Button className="expandButton btn-secondary btn-sm float-end" onClick={this.flip}>
            <div>{expanded ? <span>&#8854;</span> : <span>&#10023;</span>}</div>
          </Button>
          <div>
            <b>
              {jobData.from}
              {' '}
              -
              {' '}
              {jobData.until}
              :
            </b>
            {' '}
            {jobData.position}
          </div>
        </Card.Header>
        <Card.Body className={expanded ? '' : 'd-none'}>
          <div>
            <div className="row border-bottom">
              <div className="col-4">
                Tasks:
              </div>
              <div className="col-8">
                {jobData.tasks.map((task, i) => (
                  <span key={`t${i}`}>
                    {task}
                    <br />
                  </span>
                ))}
              </div>
            </div>
            {jobData.accomplishments.length > 0
              ? (
                <div className="row">
                  <div className="col-4">
                    Key Accomplishments:
                  </div>
                  <div className="col-8">
                    {jobData.accomplishments.map((acc, i) => (
                      <span key={i}>
                        {acc}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              )
              : ''}
            <div className="row">
              <div className="col-4">
                References:
              </div>
              <div className="col-8">
                {jobData.references.map((ref, i) => (
                  <span key={`r${i}`}>
                    {ref}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
