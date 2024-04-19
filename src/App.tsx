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
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
          <Row className="pt-3 text-center">
            <Col xs={6} xl={3} className="pb-3">
              <Link className="btn btn-secondary w-100" to="/skills">
                <FontAwesomeIcon icon={faLaptopCode} />&nbsp;<span>Skills</span>
              </Link>
            </Col>
            <Col xs={6} xl={3} className="pb-3">
              <Link className="btn btn-secondary w-100" to="/experience">
                <FontAwesomeIcon icon={faBuildingColumns} />&nbsp;<span>Experience</span>
              </Link>
            </Col>
            <Col xs={6} xl={3} className="pb-3">
              <Link className="btn btn-secondary w-100" to="/education">
                <FontAwesomeIcon icon={faUserGraduate} />&nbsp;<span>Education</span>
              </Link>
            </Col>
            <Col xs={6} xl={3} className="pb-3">
              <Link className="btn btn-secondary w-100" to="/awards">
                <FontAwesomeIcon icon={faAward} />&nbsp;<span>Awards</span>
              </Link>
            </Col>
          </Row>
        </Container>
        <Row className="pt-2"><Outlet /></Row>
        <LocationProvider>
          <AnimatedRoutes />
        </LocationProvider>
        <Row className="Footer p-5">
          <Footer />
        </Row>
      </Container>
    );
  }
}

/**
 * Header component
 */
function PageHead() {
  return (
    <Row className='pt-3 ps-3 pe-3 pb-0 text-center'>
      <Col xs={10} lg={9} className='text-start'>
        <h1>Julian Badillo</h1>
        <h2>Software Engineer</h2>
        <p>A successful day: when someone is grateful I&lsquo;m working by their side.</p>
      </Col>
      <Col xs={2} lg={3} className='text-end'>
        <img className="logo-dark w-100" src="jblight.svg" alt="jb" />
      </Col>
      <div className='position-absolute top-0 end-0 m-2 m-md-4'>
        <ThemeToggle />
      </div>
    </Row>
  );
}

/**
 * Wrapper for the location provider
 * @param param0 
 * @returns 
 */
function LocationProvider({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  )
}

/**
 * Routes with animation - explicitly extracted so we can use location.
 * @returns 
 */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="skills" element={<Skills />} />
      <Route path="experience" element={<Experience />} />
      <Route path="education" element={<Education />} />
      <Route path="awards" element={<Awards />} />
    </Routes>
  );
}

/**
 * Footer component
 */
function Footer() {
  return (
    <div className='d-flex justify-content-center fs-4 text-secondary'>
      <div>
        <a className='text-secondary' href="https://www.linkedin.com/in/juli4nb4dillo/" title='LinkedIn' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div>
        <a className='text-secondary' href="https://github.com/julianbadillo" title='Personal GitHub' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a className='text-secondary' href="https://github.com/juli4nb4dillo" title='Corporate GitHub' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}


export default App;
