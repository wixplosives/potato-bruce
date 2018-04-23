import * as React from 'react';
import { PotatoBruce } from './potato-bruce';
import { Mood } from './types';
import style from './app.st.css';

interface AppState {
    mood: Mood;
}

export class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            mood: 'happy'
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    private handleChange(evt: any) {
        this.setState({
            mood: evt.target.value
        });
    }

    public render() {
        return <div {...style('root')}>
            <div {...style('nav')}>
                <button value="happy" onClick={this.handleChange}>Happy</button>
                <button value="sad" onClick={this.handleChange}>Sad</button>
                <button value="ecstatic" onClick={this.handleChange}>Ecstatic</button>
                <button value="glasses" onClick={this.handleChange}>Glasses</button>
            </div>

            <PotatoBruce {...style('potatoWorld')}  mood={this.state.mood} />
        </div>
    }
}

// export const App: React.SFC<{ className?: string }> = (props) => (
//     <div {...style('root', {}, props)}>
//         <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//         </select>

//         <PotatoBruce mood="sad" />
//     </div>
// );
