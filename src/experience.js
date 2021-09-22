import React from 'react';
const jobs = [
    {
        from: 'Jan 2021',
        until: 'Now',
        company: 'Fermi National Accelerator Laboratory (Fermilab)',
        webpage: 'http://fnal.gov/',
        division: 'Accelerator Division',
        city: 'Batavia, IL',
        position: 'Applications Developer & Systems Analyst',
        references: ['Erik Gottschalk egottschalk@fnal.gov'],
        keywords: ['web developer', 'fullstack', 'React', 'Node.js', 'GraphQL'],
        tasks: ['Do use case analysis for accelerator controls modernization.',
            'Develop software for accelerator controls.'],
        accomplishments: [],
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
    },
    {
        from: 'Jan 2011',
        until: 'Jul 2013',
        company: 'Politecnico Grancolombiano',
        webpage: 'https://www.poli.edu.co/',
        division: 'Facultad de Ingenieria',
        city: 'Bogota, Colombia',
        position: 'Teacher',
        references: ['Rafael García, rgarcia@poli.edu.co',],
        keywords: ['teaching', 'maths', 'algorithms', 'java', 'cryptography', 'distributed', 'programming'],
        tasks: ['Algorithm analysis and correction.',
            'Logics and Maths for Computing Science',
            'Programming in Java',
            'Distributed systems', 'Cryptography'],
        accomplishments: ['Systems Engineering’s best teacher award, rated by students.',
            'Design of graduate degree in information security.'],
    },
    {
        from: 'Sept 2007',
        until: 'Dec 2010',
        company: 'cyte',
        webpage: 'https://www.poli.edu.co/',
        division: null,
        city: 'Bogota, Colombia',
        position: 'Software Development Leader',
        references: ['Milton Quiroga, mquiroga@cyte.co',],
        keywords: ['security', 'cryptography', 'pki', 'digital signatures', 'software', 'java', 'information security', 'j2ee', 'consulting'],
        tasks: ['Design, develop and support software applications intended to secure our client’s information.',
            'Provide expertise in consulting projects about information security, awareness, information classifying, business continuity planning and information technology risk analysis.',],
        accomplishments: ["Refactoring and improvement of the company's cryptographic products",
            "Design of new products based on client's needs.",
            'Leading security-related consulting.',],
    },
];

export class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = { jobs: jobs };
    }

    render() {
        const jobs = this.state.jobs;
        return <div className="Experience slideDown">
                    {jobs.map((job, i) => <Job jobData={job} key={i} />)}
                </div>
    }
}

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.flip = this.flip.bind(this);
        this.state = { expanded: false };
    }

    flip() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const jobData = this.props.jobData;
        return <>
            <div className="card">
                <h3 onClick={this.flip}>{jobData.company}</h3>
                <p>{jobData.from} - {jobData.until}: {jobData.position}
                    &emsp;
                    <button className="expandButton" onClick={this.flip}>
                        <div>{this.state.expanded?"-":"+"}</div>
                    </button>
                </p>
                <div className={this.state.expanded ? "expanded" : "collapsed"}>
                    <div className="tr">
                        <div className="th nowrap" onClick={this.flip}>
                            {jobData.from} - {jobData.until}
                        </div>
                        <div className="th" onClick={this.flip}>
                            {jobData.company}
                        </div>
                    </div>
                    <div className="tr">
                        <div className="td">
                            Tasks:
                        </div>
                        <div className="td">
                            {jobData.tasks.map((task, i) => <span key={"t" + i}>{task}<br /></span>)}
                        </div>
                    </div>
                    {jobData.accomplishments.length > 0
                        ? <div className="tr">
                            <div className="td">
                                Key Accomplishments:
                            </div>
                            <div className="td">
                                {jobData.accomplishments.map((acc, i) => <span key={i}>{acc}<br /></span>)}
                            </div>
                        </div>
                        : ""}
                    <div className="tr">
                        <div className="td">
                            References:
                        </div>
                        <div className="td">
                            {jobData.references.map((ref, i) => <span key={"r" + i}>{ref}<br /></span>)}
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}