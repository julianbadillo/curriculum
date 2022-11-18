/* eslint-disable react/prop-types */
import React from 'react';

const skills = [
  {
    skill: 'Programming Languages',
    items: [
      { name: 'C#', level: '5' },
      { name: 'Java', level: '5' },
      { name: 'SQL', level: '5' },
      { name: 'Python', level: '4' },
      { name: 'Javascript/HTML/CSS', level: '3' },
      { name: 'C/C++', level: '3' },
      { name: 'Ruby', level: '2' },
      { name: 'Kotlin', level: '2' },
      { name: 'Bash', level: '2' },
      { name: 'Matlab', level: '2' },
    ],
  },
  {
    skill: 'Databases',
    items: [
      { name: 'SQL Sever', level: '5' },
      { name: 'Oracle DB', level: '4' },
      { name: 'MySql/MariaDB', level: '3' },
      { name: 'PostgreSQL', level: '3' },
      { name: 'CouchDB', level: '3' },
      { name: 'LiteDB', level: '3' },
    ],
  },
  {
    skill: 'Web Frameworks',
    items: [
      { name: 'ASP MVC', level: '5' },
      { name: 'Node.js/Express', level: '4' },
      { name: 'J2EE/JEE', level: '4' },
      { name: 'Ruby on Rails', level: '2' },
      { name: 'Django', level: '2' },
    ],
  },
  {
    skill: 'Miscellaneous',
    items: [

      { name: 'React', level: '5' },
      { name: 'CSS', level: '4' },
      { name: 'JQuery', level: '4' },
      { name: 'Git', level: '3' },
      { name: 'Docker', level: '2' },
      { name: 'Puppet', level: '2' },

    ],
  },
];

export default function Skills() {
  return (
    <div className="Skills slideDown">
      {skills.map((skill) => <SkillClass skillData={skill} key={skill.skill} />)}
    </div>
  );
}

/**
 * Skill class
 *
 */
class SkillClass extends React.Component {
  constructor(props) {
    super(props);
    this.flip = this.flip.bind(this);
    this.state = { expanded: false };
  }

  flip() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { skillData } = this.props;
    const { expanded } = this.state;
    return (
      <div className="card">
        <button onClick={this.flip} type="button" className="h3">
          {skillData.skill}
                        &emsp;
          <button className="expandButton" type="button">
            <div>{expanded ? '-' : '+'}</div>
          </button>
        </button>
        <div className={expanded ? 'items expanded' : 'items collapsed'}>
          {skillData.items.map((m) => (
            <span className="item" key={m}>
              {m.name}
&nbsp;
              <Stars n={m.level} />
              {' '}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

function Stars(props) {
  const c = [];
  for (let i = 0; i < props.n; i += 1) {
    c.push(<img src="star.svg" alt="star" key={i} />);
  }
  return c;
}
