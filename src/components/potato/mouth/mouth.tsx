import React from 'react';
import { style, classes } from './mouth.st.css';

export interface MouthProps {
    className?: string;
}

export const Mouth: React.SFC<MouthProps> = (props: MouthProps) => (
    <div className={style(classes.root, props.className)}>
        <div className={classes.upperLip} />
        <div className={classes.tongue} />
        <div className={classes.lowerLip} />
    </div>
);
