import * as React from 'react';
import { Backdrop, Mood, Size } from '../types';
import style from "./nav-bar.st.css";

export interface NavBarProps {
  size: Size;
  backdrop: Backdrop;
  mood: Mood;
  handleMoodChange: any;
  handleSizeChange: any;
  handleBackdropChange: any;
  resetAll: any;
}

export const NavBar = (props: NavBarProps) => {
  const {
    handleMoodChange,
    handleSizeChange,
    handleBackdropChange,
    resetAll,
  } = props;

  return (
    <div {...style('root', {mood: props.mood, backdrop: props.backdrop, size: props.size})}>
      <div {...style('nav', {}, props)}>
        <div {...style('buttonGroup mood')}>
          <button className={style.resetAllButton} onClick={resetAll}>:|</button>
          <button className={style.isHappy} value="happy" onClick={handleMoodChange}>😀</button>
          <button className={style.isShy} value="shy" onClick={handleMoodChange}>☺️</button>
          <button className={style.isGlasses} value="dealWithIt" onClick={handleMoodChange}>🕶</button>
        </div>
        <div {...style('buttonGroup size')}>
          <button className={style.smallSize} value="small" onClick={handleSizeChange}>🥔</button>
          <button className={style.largeSize} value="big" onClick={handleSizeChange}>🥔</button>
        </div>
        <div {...style('buttonGroup location')}>
          <button className={style.inParis} value="paris" onClick={handleBackdropChange}>🇫🇷</button>
          <button className={style.inWix} value="wixhq" onClick={handleBackdropChange}>🏙</button>
        </div>
      </div>
    </div>);
}