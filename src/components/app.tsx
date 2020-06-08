import React from 'react';
import { Potato } from './potato/potato';
import { NavBar } from '../components/nav-bar/nav-bar';
import { Mood, Backdrop, Size } from './types';
import { style, classes } from './app.st.css';

export interface AppState {
    mood: Mood;
    backdrop: Backdrop;
    size: Size;
}

export class App extends React.Component<{}, AppState> {
    state: AppState = {
        mood: 'reset',
        backdrop: 'default',
        size: 'big',
    };

    private resetAll: React.MouseEventHandler<HTMLButtonElement> = () => {
        this.setState({
            mood: 'reset',
            backdrop: 'default',
            size: 'big',
        });
    };

    private handleMoodChange: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
        this.setState({
            mood: evt.currentTarget.value,
        });
    };

    private handleBackdropChange: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
        this.setState({
            backdrop: evt.currentTarget.value as Backdrop,
        });
    };

    private handleSizeChange: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
        this.setState({
            size: evt.currentTarget.value as Size,
        });
    };

    public render() {
        return (
            <div className={classes.root}>
                <div className={style(classes.backdrop, { in: this.state.backdrop })} />

                <NavBar
                    mood={this.state.mood}
                    backdrop={this.state.backdrop}
                    size={this.state.size}
                    handleBackdropChange={this.handleBackdropChange}
                    handleMoodChange={this.handleMoodChange}
                    handleSizeChange={this.handleSizeChange}
                    resetAll={this.resetAll}
                />

                <Potato className={classes.potatoBruce} mood={this.state.mood} size={this.state.size} />

                <footer className={classes.siteFooter}>
                    <a href="https://stylable.io/" target="_blank" rel="noreferrer">
                        <span className={classes.stylableLogo} />
                        Stylable
                    </a>{' '}
                    <a href="https://github.com/wix/potato-bruce" target="_blank" rel="noreferrer">
                        <span className={classes.githubLogo} />
                        Github
                    </a>
                </footer>
            </div>
        );
    }
}
