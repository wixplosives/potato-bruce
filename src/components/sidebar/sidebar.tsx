import * as React from 'react';
import style from './../app.st.css';
import { NavBarProps } from '../types';

//   ⏄⏁⏇⏃

const NavBar = (props: NavBarProps) => {
  const {
    handleMoodChange,
    handleSizeChange,
    handleBackdropChange,
    resetAll,
  } = props;

  return <div {...style('root')}>
    <div {...style('nav')}>
      <div {...style('buttonGroup header')}>
        <button {...style('resetAllButton')} onClick={resetAll}>✖</button>
        {/* <button value="perspective" onClick={handleBackdropChange}>👁</button> */}
      </div>
      <div {...style('buttonGroup mood')}>
        <button value="happy" onClick={handleMoodChange}>😀</button>
        <button value="sad" onClick={handleMoodChange}>☺️</button>
        <button value="glasses" onClick={handleMoodChange}>🕶</button>
      </div>
      <div {...style('buttonGroup size')}>
        <button value="small" onClick={handleSizeChange}>-</button>
        <button value="big" onClick={handleSizeChange}>+</button>
      </div>
      <div {...style('buttonGroup location')}>
        <button value="paris" onClick={handleBackdropChange}>🇫🇷</button>
        <button value="wixhq" onClick={handleBackdropChange}>🏙</button>
      </div>
    </div>
  </div>
}

export default NavBar;