import * as React from 'react';
import style from './index.st.css';

import { Eye } from './eye';

export interface EyesProps {
    mood: 'happy' | 'sad';
}

export const EyeBox: React.SFC<EyesProps & { className?: string }> = (props: EyesProps) => {
    return <div {...style('root', {}, props)} >
        <Eye {...style('eye')} mood={props.mood}/>
        <Eye {...style('eye')} mood={props.mood}/>
    </div>
};
