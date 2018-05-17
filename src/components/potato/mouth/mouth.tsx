import * as React from 'react';
import style from './mouth.st.css';

export interface MouthProps {
    className?: string;
}

export const Mouth: React.SFC<MouthProps> = (props: MouthProps) => (
    <div {...style('root', {}, props)} >
        <div {...style('upperLip')} />
        <div {...style('tongue')} />  
        <div {...style('lowerLip')} />
    </div>
);
