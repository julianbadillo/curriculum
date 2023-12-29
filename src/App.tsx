import React from 'react';
import './index.css';
//import './animation.css';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Awards from './Awards';
import { Col, Container, Row } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBuildingColumns, faLaptopCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Outlet, Link } from "react-router-dom";

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
    return (
      <Container className="App">
        <PageHead />
        <Container>
          <Row className="pb-3 pt-3 text-center">
            <Col>
              <Link className="btn btn-secondary" to="/education">
                <FontAwesomeIcon icon={faUserGraduate} />&nbsp;<span>Education</span>
              </Link>
            </Col>
            <Col>
              <Link className="btn btn-secondary" to="/experience">
                <FontAwesomeIcon icon={faBuildingColumns} />&nbsp;<span>Experience</span>
              </Link>
            </Col>
            <Col>
              <Link className="btn btn-secondary" to="/skills">
                <FontAwesomeIcon icon={faLaptopCode} />&nbsp;<span>Skills</span>
              </Link>
            </Col>
            <Col>
              <Link className="btn btn-secondary" to="/awards">
                <FontAwesomeIcon icon={faAward} />&nbsp;<span>Awards</span>
              </Link>
            </Col>
          </Row>
        </Container>
        <Row className="pt-2"><Outlet /></Row>
        <Routes>
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="awards" element={<Awards />} />
        </Routes>
        <Row><Footer /></Row>
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
