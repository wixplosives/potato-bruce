import React from 'react';
import { Backdrop, Mood, Size } from '../types';
import { style, classes } from './nav-bar.st.css';

export interface NavBarProps {
    size: Size;
    backdrop?: Backdrop;
    mood?: Mood;
    handleMoodChange: React.MouseEventHandler<HTMLButtonElement>;
    handleSizeChange: React.MouseEventHandler<HTMLButtonElement>;
    handleBackdropChange: React.MouseEventHandler<HTMLButtonElement>;
    resetAll: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
    const { handleMoodChange, handleSizeChange, handleBackdropChange, resetAll } = props;

    return (
        <div
            className={style(classes.root, {
                mood: props.mood,
                backdrop: props.backdrop,
                size: props.size,
            })}
        >
            <div className={style(classes.nav, props.className)}>
                <div className={style(classes.buttonGroup)}>
                    <button className={classes.resetAllButton} onClick={resetAll}>
                        :|
                    </button>
                    <button className={classes.isHappy} value="happy" onClick={handleMoodChange}>
                        😀
                    </button>
                    <button className={classes.isShy} value="shy" onClick={handleMoodChange}>
                        ☺️
                    </button>
                    <button className={classes.isGlasses} value="dealWithIt" onClick={handleMoodChange}>
                        🕶
                    </button>
                </div>
                <div className={style(classes.buttonGroup)}>
                    <button className={classes.smallSize} value="small" onClick={handleSizeChange}>
                        🥔
                    </button>
                    <button className={classes.largeSize} value="big" onClick={handleSizeChange}>
                        🥔
                    </button>
                </div>
                <div className={style(classes.buttonGroup)}>
                    <button className={classes.inParis} value="paris" onClick={handleBackdropChange}>
                        🇫🇷
                    </button>
                    <button className={classes.inAmsterdam} value="amsterdam" onClick={handleBackdropChange}>
                        🇳🇱
                    </button>
                    <button className={classes.inWix} value="wixhq" onClick={handleBackdropChange}>
                        🏙
                    </button>
                </div>
            </div>
        </div>
    );
};
