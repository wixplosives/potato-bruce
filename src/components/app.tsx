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
            backdrop: 'wixhq',
            size: 'big'
        };

        this.handleMoodChange = this.handleMoodChange.bind(this);
        this.handleBackdropChange = this.handleBackdropChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
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
                handleBackdropChange={this.handleBackdropChange}
                handleMoodChange={this.handleMoodChange}
                handleSizeChange={this.handleSizeChange}
            />

            <PotatoBruce
                {...style('potatoBruce')}
                mood={this.state.mood}
                size={this.state.size} />

            {/* <PotatoBruce
                {...style('potatoBruce')}
                mood={this.randomMood(this.state.mood)}
                size={this.state.size} /> */}
        </div>
    }
}
