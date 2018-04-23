import * as React from 'react';
import style from './index.st.css';

export interface MouthProps {
    mood: 'happy' | 'sad';
}

export const Mouth: React.SFC<MouthProps & { className?: string }> = (props: MouthProps) => (
    <div {...style('root', {}, props)} >
        <div {...style('mouthBox') } >
            <div {...style('upperLip') } />
            <div {...style('lowerLip') } />
        </div>
    </div>
);
