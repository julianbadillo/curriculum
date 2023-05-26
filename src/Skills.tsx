/* eslint-disable react/prop-types */
import React from 'react'

interface SkillItem {
  skill: string
  // array of items (name, level)
  items: Array<{
    name: string
    level: number
  }>
}

const skills: SkillItem[] = [
  {
    skill: 'Programming Languages',
    items: [
      { name: 'Python', level: 5 },
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

export default function Skills () {
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
class SkillClass extends React.Component <SkillProps, SkillState> {
  constructor (props: SkillProps) {
    super(props)
    this.flip = this.flip.bind(this)
    this.state = { expanded: false }
  }

  flip () {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  render () {
    const { skillData } = this.props
    const { expanded } = this.state
    return (
      <div className="card">
        <button onClick={this.flip} type="button" className="h3">
          {skillData.skill}
                        &emsp;
          <button className="expandButton" type="button">
            <div>{expanded ? <span>&#8854;</span> : <span>&#10023;</span>}</div>
          </button>
        </button>
        <div className={expanded ? 'items expanded' : 'items collapsed'}>
          {skillData.items.map((m) => (
            <span className="item" key={m.name}>
              {m.name}
              &nbsp;
              <Stars n={m.level} />
              {' '}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

interface StarProps {
  n: number
}
/**
 * Render a few stars
 */
function Stars ({ n }: StarProps): JSX.Element {
  const c = []
  for (let i = 0; i < n; i += 1) {
    c.push(<span key={i}>&#10023;</span>)
  }
  return <>{c}</>
}
