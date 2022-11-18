/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animation.css';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import Awards from './awards';

class CVDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: null, dark: true };
  }

  handleMenuOptionClick = (opt) => {
    this.setState({ content: opt });
  };

  flipDark = () => {
    const { dark } = this.state;
    this.setState({ dark: !dark });
  };

  render() {
    const options = ['Education', 'Experience', 'Skills', 'Awards'];
    const { dark, content } = this.state;
    document.body.className = dark ? 'dark' : 'light';
    return (
      <div className="CVDisplay">
        <PageHead />
        <Menu
          handleMenuOptionClick={this.handleMenuOptionClick}
          options={options}
          dark={dark}
          flipDark={this.flipDark}
        />
        <hr />
        <CVContent content={content} dark={dark} />
        <Footer />
      </div>
    );
  }
}

function PageHead() {
  return (
    <div className="PageHead">
      <div>
        <h1>Julian Badillo</h1>
        <hr />
        <h2>Software Engineer</h2>
        <p>A successful day: when someone is grateful I&lsquo;m working by their side.</p>
      </div>
      <div>
        <div>&emsp;</div>
      </div>
      <div className="Logo"><img src="jb.svg" alt="jb" /></div>
    </div>
  );
}

function Menu({ options, handleMenuOptionClick, flipDark }) {
  return (
    <div>
      <div className="Menu">
        {options.map((mo, i) => (
          <MenuOption
            optionName={mo}
            key={i}
            handleMenuOptionClick={handleMenuOptionClick}
          />
        ))}
        <div>
          <button onClick={flipDark} className="darkFlip" type="button" />
        </div>
      </div>
    </div>
  );
}

function MenuOption({ handleMenuOptionClick, optionName }) {
  return (
    <div>
      <button onClick={() => handleMenuOptionClick(optionName)} type="button">
        {optionName}
      </button>
    </div>
  );
}

function CVContent({ content }) {
  let moreContent = '';
  if (content === 'Experience') {
    moreContent = <Experience />;
  } else if (content === 'Education') {
    moreContent = <Education />;
  } else if (content === 'Skills') {
    moreContent = <Skills />;
  } else if (content === 'Awards') {
    moreContent = <Awards />;
  }
  return <div>{moreContent}</div>;
}

function Footer() {
  return (
    <div className="Footer">
      <div><a href="https://www.linkedin.com/in/juli4nb4dillo/">LinkedIn</a></div>
      <div><a href="https://github.com/julianbadillo">GitHub</a></div>
    </div>
  );
}

ReactDOM.render(<CVDisplay />, document.getElementById('root'));
