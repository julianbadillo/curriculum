/* eslint-disable react/prop-types */
import { faBug, faCode, faDatabase, faGlobe, faTemperature0, faTemperature1, faTemperature2, faTemperature3, faTemperature4, faToolbox, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'

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
      { name: 'Python &f3e2;', level: 5 },
      { name: 'JavaScript/HTML/CSS', level: 5 },
      { name: 'C#', level: 4 },
      { name: 'Java', level: 4 },
      { name: 'SQL', level: 5 },
      { name: 'C/C++', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'Go', level: 2 },
      { name: 'Ruby', level: 2 },
      { name: 'Kotlin', level: 2 },
      { name: 'Bash', level: 2 },
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
      { name: 'CouchDB', level: 3 },
      { name: 'LiteDB', level: 3 }
    ]
  },
  {
    skill: 'Web Frameworks',
    icon: faCode,
    items: [
      { name: 'Django', level: 5 },
      { name: 'ASP MVC', level: 4 },
      { name: 'Node.js / Express', level: 4 },
      { name: 'JEE', level: 2 },
      { name: 'Ruby on Rails', level: 2 }
    ]
  },
  {
    skill: 'Miscellaneous',
    icon: faToolbox,
    items: [
      { name: 'React', level: 5 },
      { name: 'CSS', level: 4 },
      { name: 'Prompt Engineering', level: 4 },
      { name: 'JQuery', level: 4 },
      { name: 'Git', level: 3 },
      { name: 'Docker / Swarm', level: 4 }
    ]
  }
]

export default function Skills() {
  return (
    <div className="Skills slideDown">
      {skills.map((skill) => <SkillClass skillData={skill} key={skill.skill} />)}
    </div>
  )
}

interface SkillProps {
  skillData: SkillItem
  key: string
}

interface SkillState {
  expanded: boolean
}

/**
 * Skill class
 *
 */
class SkillClass extends React.Component<SkillProps, SkillState> {
  constructor(props: SkillProps) {
    super(props)
    this.flip = this.flip.bind(this)
    this.state = { expanded: false }
  }

  flip() {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  render() {
    const { skillData } = this.props
    const { expanded } = this.state
    return (
      <Card className='m-3'>
        <Card.Header onClick={this.flip}>
          {skillData.icon ? <><FontAwesomeIcon icon={skillData.icon} />&emsp;</> : ''}
          {skillData.skill}
          &emsp;
          <Button className="expandButton  btn-secondary btn-sm">
            <div>{expanded ? <span>&#8854;</span> : <span>&#10023;</span>}</div>
          </Button>
        </Card.Header>
        <Card.Body>
          <div className={expanded ? 'items expanded' : 'items collapsed'}>
            {skillData.items.map((m) => (
              <Badge className="item bg-secondary m-1 p-2" key={m.name}>
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
}

interface StarProps {
  n: number
}
/**
 * Render a few stars
 */
function Stars({ n }: StarProps): JSX.Element {
  const c = []
  for (let i = 0; i < n; i += 1) {
    c.push(<span key={i}>&#10023;</span>)
  }
  return <>{c}</>
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