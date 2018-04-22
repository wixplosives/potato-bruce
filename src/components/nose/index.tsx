import * as React from 'react';
import style from './index.st.css';

export interface NoseProps {
    mood: 'happy' | 'sad';
}

export const Nose: React.SFC<NoseProps & { className?: string }> = (props: NoseProps) => (
    <div {...style('root', {}, props)} >
        <div {...style('nose', {mood: props.mood})}/>
    </div>
);
