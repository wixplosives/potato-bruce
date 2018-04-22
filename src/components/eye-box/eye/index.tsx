import * as React from 'react';
import style from './index.st.css';

export interface EyeProps {
    mood: 'happy' | 'sad';
}

export const Eye: React.SFC<EyeProps & { className?: string }> = (props: EyeProps) => (
    <div {...style('root', {}, props)}>
        <div {...style('brow', { mood: props.mood })} />
        <div {...style('socket')}>
            <div {...style('lid', { mood: props.mood })} />
            <span {...style('pupil', { mood: props.mood })}/>
        </div>
    </div>
);
