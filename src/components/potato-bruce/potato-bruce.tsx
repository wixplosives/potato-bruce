import * as React from 'react';
import style from './potato-bruce.st.css';
import { Mood, Size, Backdrop } from './../types';

import { Eye } from './../eye';
import { Mouth } from './../mouth';

interface PotatoBruceProps {
    mood: Mood;
    className?: string;
    size: Size;
    backdrop: Backdrop;
}

export const PotatoBruce: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div {...style('root', { mood: props.mood }, props)}>
        <div {...style('backdrop', { location: props.backdrop })} />

        <div {...style('heroBox')}>
            <div {...style('hero', { size: props.size, location: props.backdrop } )}>
                <div className={style.eyes}>
                    <Eye {...style('eye')} />
                    <Eye {...style('eye')} />
                </div>
                <Mouth className={style.mouth} />
            </div>
        </div>
    </div>
);
