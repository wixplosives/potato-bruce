import React from 'react';
import { style, classes } from './eye.st.css';

export interface EyeProps {
    className?: string;
}

export const Eye: React.FC<EyeProps> = (props: EyeProps) => (
    <div className={style(classes.root, props.className)}>
        <div className={classes.brow} />
        <div className={classes.socket}>
            <div className={classes.lid} />
            <span className={classes.pupil} />
        </div>
    </div>
);
