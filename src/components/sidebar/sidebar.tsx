import * as React from 'react';
import style from './../app.st.css';
import { NavBarProps } from '../types';

const NavBar = (props: NavBarProps) => {
  const {
    handleMoodChange,
    handleSizeChange,
    handleBackdropChange
  } = props;

  return <div {...style('root')}>
    <div {...style('nav')}>
      <div {...style('buttonGroup')}>
        <button value="" onClick={handleMoodChange}>Reset</button>
        <button value="happy" onClick={handleMoodChange}>Happy</button>
        <button value="sad" onClick={handleMoodChange}>Sad</button>
        <button value="glasses" onClick={handleMoodChange}>Glasses</button>
      </div>
      <div {...style('buttonGroup')}>
        <button value="paris" onClick={handleBackdropChange}>Paris</button>
        <button value="wixhq" onClick={handleBackdropChange}>WixHQ</button>
        <button value="perspective" onClick={handleBackdropChange}>Perspective</button>
      </div>
      <div {...style('buttonGroup')}>
        <button value="small" onClick={handleSizeChange}>Small</button>
        <button value="big" onClick={handleSizeChange}>Big</button>
      </div>
    </div>

  </div>
}

export default NavBar;