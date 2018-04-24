import * as React from 'react';
import { PotatoBruce } from './potato-bruce/potato-bruce';
import { Mood, Backdrop, Size } from './types';
import style from './app.st.css';

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

    public render() {
        return <div {...style('root')}>
            <div {...style('nav')}>
                <button value="" onClick={this.handleMoodChange}>Reset</button>
                <button value="happy" onClick={this.handleMoodChange}>Happy</button>
                <button value="sad" onClick={this.handleMoodChange}>Sad</button>
                <button value="glasses" onClick={this.handleMoodChange}>Glasses</button>
                <span>&mdash;</span>
                <button value="paris" onClick={this.handleBackdropChange}>Paris</button>
                <button value="wixhq" onClick={this.handleBackdropChange}>Wix HQ</button>
                <button value="japan" onClick={this.handleBackdropChange}>Japan</button>
                <span>&mdash;</span>
                <button value="small" onClick={this.handleSizeChange}>Small</button>
                <button value="big" onClick={this.handleSizeChange}>Big</button>
            </div>

            <PotatoBruce 
                {...style('potatoWorld')} 
                mood={this.state.mood} 
                size={this.state.size} 
                backdrop={this.state.backdrop} />
        </div>
    }
}
