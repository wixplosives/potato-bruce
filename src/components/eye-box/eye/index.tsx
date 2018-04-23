import * as React from 'react';
import style from './index.st.css';
import { Mood } from '../../types';

export interface EyeProps {
    mood: Mood;
    className?: string;
}

export const Eye: React.SFC<EyeProps> = (props: EyeProps) => (
    <div {...style('root', {}, props)}>
        <div {...style('brow', { mood: props.mood })} />
        <div {...style('socket')}>
            <div {...style('lid', { mood: props.mood })} />
            <span {...style('pupil', { mood: props.mood })}/>
        </div>
    </div>
);
