import * as React from 'react';
import style from './index.st.css';

export interface EyeProps {
    mood: 'happy' | 'sad';
}

export const Eye: React.SFC<EyeProps & { className?: string }> = (props: EyeProps) => (
    <div {...style('root', {}, props)}>
        <div {...style('lid', { mood: props.mood })}>
        </div>
        <span {...style('pupil', { mood: props.mood })}/>
    </div>
);
