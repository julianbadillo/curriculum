import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import './animation.css';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import Awards from './awards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: null, dark: true };
  }

  handleMenuOptionClick = (opt) => {
    const { content } = this.state;
    this.setState({ content: content === opt ? null : opt });
  };

  flipDark = () => {
    const { dark } = this.state;
    this.setState({ dark: !dark });
  };

  render() {
    const options = [
      {
        label: 'Education',
        icon: 'education',
      },
      {
        label: 'Experience',
        icon: 'experience',
      },
      {
        label: 'Skills',
        icon: 'skills',
      },
      {
        label: 'Awards',
        icon: 'awards',
      },
    ];
    const { dark, content } = this.state;
    document.body.className = dark ? 'dark' : 'light';
    return (
      <div className="CVDisplay">
        <PageHead />
        <Menu
          handleMenuOptionClick={this.handleMenuOptionClick}
          options={options}
          flipDark={this.flipDark}
          content={content}
        />
        <CVContent content={content} />
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
        <h2>Software Engineer</h2>
        <p>A successful day: when someone is grateful I&lsquo;m working by their side.</p>
      </div>
      <div>
        <div>&emsp;</div>
      </div>
      <div className="Logo">
        <img className="ImgDark" src="jb.svg" alt="jb" />
        <img className="ImgLight" src="jblight.svg" alt="jb" />
      </div>
    </div>
  );
}

function Menu({
  options, handleMenuOptionClick, flipDark, content,
}) {
  return (
    <div>
      <div className="Menu">
        {options.map((option) => (
          <MenuOption
            optionName={option.label}
            key={option.label}
            icon={option.icon}
            handleMenuOptionClick={handleMenuOptionClick}
            selected={content === option.label}
          />
        ))}
        <div>
          <button onClick={flipDark} className="darkFlip" type="button" aria-label="Flip" />
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleMenuOptionClick: PropTypes.func.isRequired,
  flipDark: PropTypes.func.isRequired,
  content: PropTypes.string,
};
Menu.defaultProps = {
  content: '',
};

function MenuOption({
  handleMenuOptionClick, optionName, icon, selected,
}) {
  const className = selected ? 'selected' : '';
  return (
    <div>
      <button onClick={() => handleMenuOptionClick(optionName)} type="button" className={className}>
        <img src={`${icon}.svg`} className="ImgDark" alt="icon" />
        <img src={`${icon}light.svg`} className="ImgLight" alt="icon" />
        <span>{optionName}</span>
      </button>
    </div>
  );
}
MenuOption.propTypes = {
  handleMenuOptionClick: PropTypes.func.isRequired,
  optionName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};
MenuOption.defaultProps = {
  selected: false,
};

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
  return <div className="CVContent">{moreContent}</div>;
}
CVContent.propTypes = {
  content: PropTypes.string.isRequired,
};

function Footer() {
  return (
    <div className="Footer">
      <div>
        <a href="https://www.linkedin.com/in/juli4nb4dillo/">
          <img src="in.svg" alt="Linked In" className="ImgDark" />
          <img src="inlight.svg" alt="Linked In" className="ImgLight" />
        </a>

      </div>
      <div>
        <a href="https://github.com/julianbadillo">
          <img src="github.svg" alt="GitHub" className="ImgDark" />
          <img src="githublight.svg" alt="GitHub" className="ImgLight" />
        </a>
      </div>
      <div>
        <a href="https://github.com/juli4nb4dillo">
          <img src="github.svg" alt="GitHub" className="ImgDark" />
          <img src="githublight.svg" alt="GitHub" className="ImgLight" />
        </a>
      </div>
    </div>
  );
}

export default App;
