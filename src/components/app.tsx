import * as React from 'react';
import { PotatoBruce } from './potato-bruce';
import { Mood, Backdrop } from './types';
import style from './app.st.css';

interface AppState {
    mood: Mood;
    backdrop: Backdrop;
}

export class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            mood: 'happy',
            backdrop: 'wixhq'
        };
        
        this.handleMoodChange = this.handleMoodChange.bind(this);
        this.handleBackdropChange = this.handleBackdropChange.bind(this);
    }

    private handleMoodChange(evt: any) {
        this.setState({
            mood: evt.target.value
        });
    }

    private handleBackdropChange(evt: any) {
        // const value = evt.target.value;
        // let mood: any;
        // switch (value) {
        //     case 'paris':
        //         mood = 'happy';
        //         break;
        //     case 'wixhq':
        //         mood = 'sad';
        //         break;
        //     case 'aliens':
        //         mood = 'ecstatic';
        //         break;
        // }
        // const mood = value === 'paris' ? 'happy' : 'sad';
        this.setState({
            backdrop: evt.target.value,
            // mood
        });
    }

    public render() {
        return <div {...style('root')}>
            <div {...style('backdrop', {location: this.state.backdrop} )} />
            <div {...style('nav')}>
                <button value="happy" onClick={this.handleMoodChange}>Happy</button>
                <button value="sad" onClick={this.handleMoodChange}>Sad</button>
                <button value="ecstatic" onClick={this.handleMoodChange}>Ecstatic</button>
                <button value="glasses" onClick={this.handleMoodChange}>Glasses</button>
                <span> - </span>
                <button value="paris" onClick={this.handleBackdropChange}>Paris</button>
                <button value="wixhq" onClick={this.handleBackdropChange}>Wix HQ</button>
                <button value="aliens" onClick={this.handleBackdropChange}>Aliens</button>
            </div>


            <PotatoBruce {...style('potatoWorld')} mood={this.state.mood} />
        </div>
    }
}
