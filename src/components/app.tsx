import * as React from 'react';
import { PotatoBruce } from './potato-bruce/potato-bruce';
import { Mood, Backdrop, Size } from './types';
import style from './app.st.css';
import NavBar from '../components/sidebar/sidebar';

const moods = ["happy", "sad"];
const sizes = ["big", "small"];

interface AppState {
    mood: Mood;
    backdrop: Backdrop;
    size: Size;
}

export class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            mood: 'reset',
            backdrop: 'blank',
            size: 'big'
        };

        this.handleMoodChange = this.handleMoodChange.bind(this);
        this.handleBackdropChange = this.handleBackdropChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.resetAll = this.resetAll.bind(this);
    }

    private resetAll() {
        this.setState({
            mood: 'reset',
            backdrop: 'blank',
            size: 'big'
        });
    }

    private handleMoodChange(evt: any) {
        this.setState({
            mood: evt.target.value
        });
    }

    private handleBackdropChange(evt: any) {
        this.setState({
            backdrop: evt.target.value
        });
    }

    private handleSizeChange(evt: any) {
        this.setState({
            size: evt.target.value
        });
    }

    randomSize(size: string): Size {
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        if (size === randomSize) {
            return this.randomSize(size)
        }
        return randomSize as Size;
    }

    randomMood(mood: string): Mood {
        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        if (mood === randomMood) {
            return this.randomMood(mood);
        }
        return randomMood;
    }

    public render() {
        let bruces = [];

        return <div {...style('root')}>
            <div {...style('backdrop', { in: this.state.backdrop })} />

            <NavBar
                mood={this.state.mood}
                backdrop={this.state.backdrop}
                size={this.state.size}
                handleBackdropChange={this.handleBackdropChange}
                handleMoodChange={this.handleMoodChange}
                handleSizeChange={this.handleSizeChange}
                resetAll={this.resetAll}
            />

            <PotatoBruce
                {...style('potatoBruce')}
                mood={this.state.mood}
                size={this.state.size} />

            <footer {...style('siteFooter')}>
                <a href="https://stylable.io/" target="_blank"><span {...style('stylableLogo')}></span>Stylable</a> <a href="https://github.com/wix/potato-bruce" target="_blank"><span {...style('githubLogo')}></span>Github</a>
            </footer>
        </div>
    }
}