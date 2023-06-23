import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  setTheme, setStoredTheme, getStoredTheme, getMediaTheme,
} from './colorModeToggle';

/**
* Theme pick toggle button. Toggle bootstrap between light, dark and system theme.
*/
export default function ThemeToggle() {
  const [th, setTh] = useState(getStoredTheme());
  const toggleThemeClick = () => {
    const storedTheme = getStoredTheme();
    const mediaTheme = getMediaTheme();
    const otherTheme = mediaTheme === 'dark' ? 'light' : 'dark';
    if (storedTheme === null) {
      setStoredTheme(otherTheme);
      setTheme(otherTheme);
      setTh(otherTheme);
    } else if (storedTheme === mediaTheme) {
      setStoredTheme(null);
      setTheme(mediaTheme);
      setTh(null);
    } else {
      setStoredTheme(mediaTheme);
      setTheme(mediaTheme);
      setTh(mediaTheme);
    }
  };
  // update when loading
  useEffect(() => { setTh(getStoredTheme()); }, []);
  return (
    <Button onClick={toggleThemeClick} className="btn btn-secondary btn-sm float-end">
      {th === 'dark' ? <FontAwesomeIcon icon={faMoon} /> : ''}
      {th === 'light' ? <FontAwesomeIcon icon={faSun} /> : ''}
      {th === null ? <FontAwesomeIcon icon={faCircleHalfStroke} /> : ''}
    </Button>
  );
}
