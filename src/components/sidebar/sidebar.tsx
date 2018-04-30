import * as React from 'react';
import { NavBarProps } from '../types';
import style from "./sidebar.st.css";

const NavBar = (props: NavBarProps) => {
  const {
    handleMoodChange,
    handleSizeChange,
    handleBackdropChange,
    resetAll,
  } = props;

  return <div {...style('root', {mood: props.mood, backdrop: props.backdrop, size: props.size})}>
    <div {...style('nav')}>
      <div {...style('buttonGroup mood')}>
        <button {...style('resetAllButton')} onClick={resetAll}>:|</button>
        <button {...style('isHappy')} value="happy" onClick={handleMoodChange}>😀</button>
        <button {...style('isSad')} value="sad" onClick={handleMoodChange}>☺️</button>
        <button {...style('isGlasses')} value="glasses" onClick={handleMoodChange}>🕶</button>
      </div>
      <div {...style('buttonGroup size')}>
        <button {...style('smallSize')} value="small" onClick={handleSizeChange}>🥔</button>
        <button {...style('largeSize')} value="big" onClick={handleSizeChange}>🥔</button>
      </div>
      <div {...style('buttonGroup location')}>
        <button {...style('inParis')} value="paris" onClick={handleBackdropChange}>🇫🇷</button>
        <button {...style('inWix')} value="wixhq" onClick={handleBackdropChange}>🏙</button>
      </div>
    </div>
  </div>
}

export default NavBar;