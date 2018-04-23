import * as React from 'react';
import style from './index.st.css';
import { Mood } from '../types';

import { Eye } from './eye';

export interface EyesProps {
    mood: Mood;
    className?: string;
}

export const EyeBox: React.SFC<EyesProps> = (props: EyesProps) => {
    return <div {...style('root', {}, props)} >
        <Eye {...style('eye')} mood={props.mood}/>
        <Eye {...style('eye')} mood={props.mood}/>
    </div>
};
