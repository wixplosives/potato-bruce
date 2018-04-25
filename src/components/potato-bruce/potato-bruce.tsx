import * as React from 'react';
import style from './potato-bruce.st.css';
import { Mood, Size } from './../types';

import { Eye } from './../eye';
import { Mouth } from './../mouth';

interface PotatoBruceProps {
    mood: Mood;
    className?: string;
    size: Size;
}

export const PotatoBruce: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div {...style('root', { mood: props.mood }, props)}>

        <div {...style('heroBox')}>
            <div {...style('hero', { size: props.size } )}>
                <div className={style.eyes}>
                    <Eye {...style('eye')} />
                    <Eye {...style('eye')} />
                </div>
                <Mouth className={style.mouth} />
            </div>
        </div>
    </div>
);
