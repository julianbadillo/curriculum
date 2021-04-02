import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animation.css';
import { Experience } from './experience'
import { Education } from './education'
import { Skills } from './skills'
import { Awards } from './awards'

class CVDisplay extends React.Component {

    constructor(props) {
        super(props)
        // bind so its called within this instance
        this.handleMenuOptionClick = this.handleMenuOptionClick.bind(this);
        this.state = { content: null };
    }

    handleMenuOptionClick(menuOption) {
        this.setState({ content: menuOption });
    }

    render() {
        const options = ["Education", "Experience", "Skills", "Awards"];
        return (<div className="CVDisplay">
            <PageHead />
            <Menu handleMenuOptionClick={this.handleMenuOptionClick} options={options} />
            <hr />
            <CVContent content={this.state.content} />
            <Footer />
        </div>);
    }
}

function PageHead() {
    return (<div className="PageHead">
        <div>
            <h1>Julian Badillo</h1>
            <hr />
            <h2>Software Engineer</h2>
            <p>Someone who makes things work.</p>
        </div>
        <div>
            <div>SEARCH stuff</div>
        </div>
        <div className="Logo"><img src="jb.svg" alt="jb"></img></div>
    </div>);
}

function Menu(props) {
    return (<div>
        <ul className="Menu">
            {props.options.map((mo) =>
                <MenuOption
                    optionName={mo}
                    handleMenuOptionClick={props.handleMenuOptionClick}
                />)
            }
        </ul>
    </div>);
}

function MenuOption(props) {
    return (<li>
        <button onClick={() => props.handleMenuOptionClick(props.optionName)}>
            {props.optionName}
        </button>
    </li>);
}

function CVContent(props) {
    let moreContent = "";
    if (props.content === "Experience") {
        moreContent = <Experience />
    } else if (props.content === "Education") {
        moreContent = <Education />
    } else if (props.content === "Skills") {
        moreContent = <Skills />
    } else if (props.content === "Awards") {
        moreContent = <Awards />
    }
    return <div>{moreContent}</div>
}

function Footer(props) {

    return (<div className="Footer">
        <div><a href="https://www.linkedin.com/in/juli4nb4dillo/">LinkedIn</a></div>
        <div><a href="https://github.com/julianbadillo">GitHub</a></div>
    </div>)
}

ReactDOM.render(<CVDisplay />, document.getElementById('root'));
