import React from 'react';
import './index.css';
//import './animation.css';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Awards from './Awards';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBuildingColumns, faLaptopCode, faUserGraduate, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface AppState {
  // to know which component to display
  content: string | null
}

/**
 * Main component for the app
 */
class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = { content: null };
  }

  /**
   * When a menu option is clicked
   */
  handleMenuOptionClick = (opt: string) => {
    const { content } = this.state;
    this.setState({ content: content === opt ? null : opt });
  };

  /**
   * Render the app
   * */
  render() {
    const options = [
      {
        label: 'Education',
        icon: faUserGraduate,
      },
      {
        label: 'Experience',
        icon: faBuildingColumns,
      },
      {
        label: 'Skills',
        icon: faLaptopCode,
      },
      {
        label: 'Awards',
        icon: faAward,
      },
    ];
    const { content } = this.state;
    return (
      <Container className="App">
        <PageHead />
        <Menu
          handleMenuOptionClick={this.handleMenuOptionClick}
          options={options}
          content={content}
        />
        <CVContent content={content} />
        <Footer />
      </Container>
    );
  }
}

/**
 * Header component
 */
function PageHead() {
  return (
    <Row className='p-3 text-center'>
      <Col className='text-start'>
        <h1>Julian Badillo</h1>
        <h2>Software Engineer</h2>
        <p>A successful day: when someone is grateful I&lsquo;m working by their side.</p>
      </Col>
      <Col className='text-end'>
        <img className="logo-dark" src="jblight.svg" alt="jb" />
      </Col>
      <div className='position-absolute top-0 end-0 m-2 m-md-4'>
        <ThemeToggle />
      </div>
    </Row>
  );
}

interface MenuProps {
  options: Array<{ label: string, icon: IconDefinition }>
  /** function type syntax that takes an event (VERY COMMON) */
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** any function as long as you don't invoke it (not recommended) */
  // onSomething: Function;
  handleMenuOptionClick: (opt: string) => void
  content: string | null
}

/**
 * Menu component
 * */
function Menu({
  options, handleMenuOptionClick, content,
}: MenuProps) {
  return (
    <Row className='p-3 text-center'>
      {options.map((option) => (
        <Col key={option.label}>
          <MenuOption
            optionName={option.label}
            icon={option.icon}
            handleMenuOptionClick={handleMenuOptionClick}
            selected={content === option.label}
          />
        </Col>
      ))}
    </Row>
  );
}

interface MenuOptionProps {
  handleMenuOptionClick: (opt: string) => void
  optionName: string
  icon: IconDefinition
  selected: boolean
}

/**
 * Each of the menu options
 */
function MenuOption({
  handleMenuOptionClick, optionName, icon, selected,
}: MenuOptionProps) {
  const className = selected ? 'selected' : '';
  return (
    <div>
      <Button onClick={() => { handleMenuOptionClick(optionName); }} className={className} variant="secondary">
        <FontAwesomeIcon icon={icon} />
        &nbsp;
        <span>{optionName}</span>
      </Button>
    </div>
  );
}

/**
 * Where content is displayed after click.
 */
function CVContent({ content }: { content: string | null }) {
  let moreContent = <></>;
  if (content === 'Experience') {
    moreContent = <Experience />;
  } else if (content === 'Education') {
    moreContent = <Education />;
  } else if (content === 'Skills') {
    moreContent = <Skills />;
  } else if (content === 'Awards') {
    moreContent = <Awards />;
  }
  return <Row className="CVContent pt-2">{moreContent}</Row>;
}

/**
 * Footer component
 */
function Footer() {
  return (
    <Row className="Footer p-5">
      <div className='d-flex justify-content-center'>
      <div>
        <a href="https://www.linkedin.com/in/juli4nb4dillo/" title='LinkedIn'>
          <img src="inlight.svg" alt="Linked In" className="ImgLight" />
        </a>
      </div>
      <div>
        <a href="https://github.com/julianbadillo" title='Personal GitHub'>
          <img src="githublight.svg" alt="GitHub" className="ImgLight" />
        </a>
      </div>
      <div>
        <a href="https://github.com/juli4nb4dillo" title='Corporate GitHub'>
          <img src="githublight.svg" alt="GitHub" className="ImgLight" />
        </a>
      </div>
      </div>
    </Row>
  );
}

export default App;
