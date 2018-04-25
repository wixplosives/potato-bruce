import * as React from 'react';
import style from './potato-bruce.st.css';
import { Mood, Size } from './../types';

import { Eye } from './../eye';
import { Mouth } from './../mouth';

interface PotatoBruceProps {
    mood: Mood;
    size: Size;
    className?: string;
}

export const PotatoBruce: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div {...style('root', { mood: props.mood, size: props.size }, props)}>
        <div className={style.top} />
        <div className={style.eyes}>
            <Eye {...style('eye')} />
            <Eye {...style('eye')} />
        </div>
        <Mouth className={style.mouth} />
    </div>
);
