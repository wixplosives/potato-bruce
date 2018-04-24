import * as React from 'react';
import style from './potato-bruce.st.css';
import { Mood } from './types';

import { Eye } from './eye';
import { Mouth } from './mouth';

interface PotatoBruceProps {
    mood: Mood;
    className?: string;
}

export const PotatoBruce: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div {...style('root', { mood: props.mood }, props)}>
        <div {...style('hero')}>
            <div className={style.eyes} >
                <Eye {...style('eye')} />
                <Eye {...style('eye')} />
            </div>
            <Mouth className={style.mouth}/>
        </div>
    </div>
);
