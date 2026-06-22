import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faInfinity, faPaintBrush, faGears, faDatabase, faTerminal, faRocket, faDownload, faSun, faMoon, faHammer, faPaintRoller, faCode, faBug, faGem, faToolbox, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faCss3Alt, faPython, faJs, faJava, faLinux, faReact, faGitAlt, faDocker, faPostgresql } from '@fortawesome/free-brands-svg-icons';
import skills from './skills.json';
import awards from './awards.json';
import { Experience } from './Experience';
import { Card } from './Card';



export default function App() {
    return (<main>
        <Header />
        <div className="topContainer">
            <Name></Name>
            <FullStack></FullStack>
        </div>
        <SearchBar />
        <Results />
        <Skills />
        <Experience />
        <Awards />

    </main>);
}

const Header = () => {
    return <div className="Header">
        <div className="topRightButtons">
            <FontAwesomeIcon icon={faDownload} />
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
        </div>
    </div>
}

const Name = () => {
    return <div>
        <div className="Name">Julian Badillo</div>
        <div className="Title">
            <FontAwesomeIcon icon={faRocket} />
            {' '}
            Fullstack Engineer
            {' '}
            <a href="https://github.com/julianbadillo/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://github.com/juli4nb4dillo/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/juli4nb4dillo/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    </div>;
}

const FullStack = () => {
    return <div className="FullStack">
        <div><FontAwesomeIcon icon={faPaintBrush} /> Front End</div>
        <div><FontAwesomeIcon icon={faGears} /> Back End</div>
        <div><FontAwesomeIcon icon={faDatabase} /> Databases</div>
        <div><FontAwesomeIcon icon={faInfinity} /> DevOps</div>
    </div>
}

const SearchBar = () => {
    // TODO
    // const [searchText, setSearchText] = useState('');

    // const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchText(event.target.value);
    // }

    // return <div className="SearchBar">
    //     <FontAwesomeIcon icon={faTerminal} className="terminalIcon blinking" />
    //     <input type="text" value={searchText} onChange={onTextChange} placeholder="Search" />
    //     <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
    // </div>
    return '';
}

const Results = () => {
    return '';
}

const iconMap: Record<string, any> = {
    'faHammer': faHammer,
    'faCss3Alt': faCss3Alt,
    'faReact': faReact,
    'faPaintRoller': faPaintRoller,
    'faCode': faCode,
    'faBug': faBug,
    'faPython': faPython,
    'faJs': faJs,
    'faJava': faJava,
    'faGem': faGem,
    'faDatabase': faDatabase,
    'faToolbox': faToolbox,
    'faLinux': faLinux,
    'faTerminal': faTerminal,
    'faSnowflake': faSnowflake,
    'faPostgresql': faPostgresql,
    'faDocker': faDocker,
    'faGitAlt': faGitAlt,
};

const Skills = () => {
    return <div>
        <h2>Skills</h2>
        {skills.map((obj) =>
            <Card key={obj.skill} title={obj.skill}>
                <ul className="Bullet">
                    {obj.items.map((item) => {
                        return <li key={item.name}>{item.name} {item.icon ? <FontAwesomeIcon icon={iconMap[item.icon]} /> : ''}</li>
                    })}
                </ul>
            </Card>)}
    </div>;
}


const Awards = () => {
    return <Card title="Awards">
        {awards.map((obj, idx) => <p key={obj.id}>{obj.year}: {obj.name}</p>)}
    </Card>
}

