import * as React from 'react';
import style from './index.st.css';
import { Mood } from '../types';

export interface MouthProps {
    mood: Mood;
    className?: string;
}

export const Mouth: React.SFC<MouthProps> = (props: MouthProps) => (
    <div {...style('root', {}, props)} >
        <div {...style('mouthBox')} >
            <div {...style('upperLip', { mood: props.mood })} />
            <div {...style('lowerLip', { mood: props.mood })} />
        </div>
    </div>
);
