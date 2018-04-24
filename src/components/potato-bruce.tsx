import * as React from 'react';
import style from './potato-bruce.st.css';
import { Mood } from './types';

import { EyeBox } from './eye-box';
import { Mouth } from './mouth';

interface PotatoBruceProps {
    mood: Mood;
    className?: string;
}

export const PotatoBruce: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div {...style('root', { mood: props.mood }, props)}>
        <div {...style('hero')}>
            <EyeBox className={style.eyeBox}/>
            <Mouth className={style.mouth}/>
        </div>
    </div>
);
