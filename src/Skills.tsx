/* eslint-disable react/prop-types */
import {
  faBug, faCode, faDatabase, faTemperature0, faTemperature1, faTemperature2, faTemperature3, faTemperature4, faToolbox,
  faGem, IconDefinition, faTerminal, faHammer
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faReact, faCss3Alt, faLinux } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { routeVariants } from './animation';
interface SkillItem {
  skill: string,
  icon?: IconDefinition,
  // array of items (name, level)
  items: Array<{
    name: string
    level: number
    icon?: IconDefinition
  }>
}

const skills: SkillItem[] = [
  {
    skill: 'Programming Languages',
    icon: faBug,
    items: [
      { name: 'Python', level: 5, icon: faPython },
      { name: 'JavaScript/HTML/CSS', level: 5, icon: faJs },
      { name: 'C#', level: 4 },
      { name: 'Java', level: 4, icon: faJava },
      { name: 'SQL', level: 5 },
      { name: 'Kotlin', level: 3 },
      { name: 'C/C++', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'Go', level: 2 },
      { name: 'Ruby', level: 2, icon: faGem },
      { name: 'Matlab', level: 2 }
    ]
  },
  {
    skill: 'Databases',
    icon: faDatabase,
    items: [
      { name: 'PostgreSQL', level: 5 },
      { name: 'SQL Sever', level: 5 },
      { name: 'Oracle DB', level: 4 },
      { name: 'MySql/MariaDB', level: 3 },
      { name: 'MongoDB', level: 3 },
      { name: 'LiteDB', level: 3 }
    ]
  },
  {
    skill: 'Web Frameworks',
    icon: faCode,
    items: [
      { name: 'React', level: 5, icon: faReact },
      { name: 'Django', level: 5 },
      { name: 'ASP MVC', level: 4 },
      { name: 'Node.js / Express', level: 4 },
      { name: 'JEE', level: 2 },
      { name: 'Ruby on Rails', level: 2 }
    ]
  },
  {
    skill: 'Other Skills',
    icon: faToolbox,
    items: [
      { name: 'Mentoring', level: 5 },
      { name: 'Requirements / Specs', level: 5 },
      { name: 'Full Stack', level: 5 },
      { name: 'Dev Ops.', level: 5 },
      { name: 'Data Arch.', level: 4 },
      { name: 'Prompt Engineering', level: 4 },
    ]
  },
  {
    skill: 'Miscellaneous',
    icon: faHammer,
    items: [
      { name: 'CSS', level: 4, icon: faCss3Alt },
      { name: 'JQuery', level: 4 },
      { name: 'Docker / Swarm', level: 4 },
      { name: 'Git', level: 3 },
      { name: 'Unix / Linux', level: 3, icon: faLinux },
      { name: 'Bash', level: 2, icon: faTerminal },
      { name: 'PowerShell', level: 2, icon: faTerminal },
    ]
  }
]

export default function Skills() {
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final" className="Skills slideDown">
      {skills.map((skill) => <SkillClass skillData={skill} key={skill.skill} />)}
    </motion.div>
  )
}

interface SkillProps {
  skillData: SkillItem
  key: string
}

/**
 * Skill class
 *
 */
function SkillClass({ skillData }: SkillProps): JSX.Element {
  return (
    <Card className='m-3'>
      <Card.Header>
        {skillData.icon ? <><FontAwesomeIcon icon={skillData.icon} />&emsp;</> : ''}
        {skillData.skill}
      </Card.Header>
      <Card.Body>
        <div>
          {skillData.items.map((m) => (
            <Badge className="item bg-secondary m-1 p-2" key={m.name}>
              {m.icon ? <><FontAwesomeIcon icon={m.icon} />&nbsp;</> : ''}
              {m.name}
              &nbsp;
              <Temp n={m.level} />
              {' '}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}


interface StarProps {
  n: number
}

function Temp({ n }: StarProps): JSX.Element {
  if (n >= 5) {
    return <FontAwesomeIcon icon={faTemperature4} />
  } else if (n === 4) {
    return <FontAwesomeIcon icon={faTemperature3} />
  } else if (n === 3) {
    return <FontAwesomeIcon icon={faTemperature2} />
  } else if (n === 2) {
    return <FontAwesomeIcon icon={faTemperature1} />
  }
  return <FontAwesomeIcon icon={faTemperature0} />
}