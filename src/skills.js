import React from 'react';

export class Skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {skills: []};
    }

    render(){
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
                    {name: "MySql", level: "3"},
                    {name: "PostgreSQL", level: "3"},
                    {name: "CouchDB", level: "3"},
                    {name: "LiteDB", level: "3"},
                ]
            },
            {
                skill: "Web Frameworks",
                items: [
                    {name: "ASP MVC", level: "5"},
                    {name: "J2EE / JEE", level: "4"},
                    {name: "Ruby on Rails", level: "2"},
                    {name: "Django", level: "2"},
                    {name: "Node.js / Express", level: "2"},
                ]
            },
            {
                skill: "Miscellaneous",
                items: [
                    {name: "JQuery", level: "5"},
                    {name: "CSS", level: "4"},
                    {name: "Git", level: "4"},
                    {name: "Puppet", level: "2"},
                    {name: "React", level: "3"},
                ]
            },
        ];
        return (<div className="Skills">
            {skills.map((skill) => <SkillClass skillData={skill} />)}
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
        let content = '';
        if(!this.state.expanded){
            content = <div className="card">
                            <h3 onClick={this.flip}>{skillData.skill}</h3>
                        </div>;
        }
        else{
            content = <div className="card">
                            <h3 onClick={this.flip}>{skillData.skill}</h3>
                            <div className="items">
                                {skillData.items.map((m) => <span className="item">{m.name}&nbsp;<Stars n={m.level}></Stars> </span>)}
                            </div>
                        </div>;
        }
        return content;

    }
}

function Stars(props){
    let c = [];
    for(let i = 0; i< props.n; i++){
        c.push(<img src="star.svg" alt="star" />);
    }
    return c;
}