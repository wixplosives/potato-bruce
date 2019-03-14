import * as React from 'react';
import { style, classes } from './potato.st.css';
import { Mood, Size } from './../types';

import { Eye } from './eye/eye';
import { Mouth } from './mouth/mouth';

interface PotatoBruceProps {
    mood: Mood;
    size: Size;
    className?: string;
}

export const Potato: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div className={style(classes.root, { mood: props.mood, size: props.size }, props.className)}>
        <div className={classes.top} />
        <div className={classes.eyes}>
            <Eye className={style(classes.eye, { position: 'left'})} />
            <Eye className={style(classes.eye, { position: 'right'})} />
        </div>
        <Mouth className={classes.mouth} />
    </div>
);
