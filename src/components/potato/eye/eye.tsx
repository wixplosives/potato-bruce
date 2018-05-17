import * as React from 'react';
import style from './eye.st.css';

export interface EyeProps {
    className?: string;
}

export const Eye: React.SFC<EyeProps> = (props: EyeProps) => (
    <div {...style('root', {}, props)}>
        <div {...style('brow')} />
        <div {...style('socket')} >
            <div {...style('lid')} />
            <span {...style('pupil')} />
        </div>
    </div>
);
