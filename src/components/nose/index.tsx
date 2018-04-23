import * as React from 'react';
import style from './index.st.css';
import { Mood } from '../types';

export interface NoseProps {
    mood: Mood;
    className?: string;
}

export const Nose: React.SFC<NoseProps> = (props: NoseProps) => (
    <div {...style('root', {}, props)} >
        <div {...style('nose', {mood: props.mood})}/>
    </div>
);
