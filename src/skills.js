import React from 'react';

const skills = [
    {
        skill: "Programming Languages",
        items: [
            {name: "C#", level: "5"},
            {name: "Java", level: "5"},
            {name: "SQL", level: "5"},
            {name: "Python", level: "4"},
            {name: "Javascript/HTML/CSS", level: "3"},
            {name: "C/C++", level: "3"},
            {name: "Ruby", level: "2"},
            {name: "Kotlin", level: "2"},
            {name: "Bash", level: "2"},
            {name: "Matlab", level: "2"},
        ]
    },
    {
        skill: "Databases",
        items: [
            {name: "SQL Sever", level: "5"},
            {name: "Oracle DB", level: "4"},
            {name: "MySql/MariaDB", level: "3"},
            {name: "PostgreSQL", level: "3"},
            {name: "CouchDB", level: "3"},
            {name: "LiteDB", level: "3"},
        ]
    },
    {
        skill: "Web Frameworks",
        items: [
            {name: "ASP MVC", level: "5"},
            {name: "Node.js/Express", level: "4"},
            {name: "J2EE/JEE", level: "4"},
            {name: "Ruby on Rails", level: "2"},
            {name: "Django", level: "2"},
        ]
    },
    {
        skill: "Miscellaneous",
        items: [
            
            {name: "React", level: "5"},
            {name: "CSS", level: "4"},
            {name: "JQuery", level: "4"},
            {name: "Git", level: "3"},
            {name: "Docker", level: "2"},
            {name: "Puppet", level: "2"},
            
        ]
    },
];

export class Skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {skills: skills};
    }

    render(){
        const skills = this.state.skills;
        return (<div className="Skills slideDown">
            {skills.map((skill, i) => <SkillClass skillData={skill} key={i} />)}
        </div>)
    }
}

/**
 * Skill class
 * 
 */
class SkillClass extends React.Component{
    constructor(props){
        super(props);
        this.flip = this.flip.bind(this);
        this.state = {expanded: false};
    }

    flip(){
        this.setState({expanded: !this.state.expanded});
    }

    render(){
        const skillData = this.props.skillData;
        
        return <div className="card">
                    <h3 onClick={this.flip}>{skillData.skill}
                        &emsp;
                        <button className="expandButton">
                            <div>{this.state.expanded?"-":"+"}</div>
                        </button>
                    </h3>
                    <div className={this.state.expanded ? "items expanded" : "items collapsed"}>
                        {skillData.items.map((m, i) => <span className="item" key={i}>{m.name}&nbsp;<Stars n={m.level}></Stars> </span>)}
                    </div>
                </div>;
    }
}

function Stars(props){
    let c = [];
    for (let i = 0; i< props.n; i++) {
        c.push(<img src="star.svg" alt="star" key={i} />);
    }
    return c;
}