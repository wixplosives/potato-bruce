import * as React from 'react';
import style from './index.st.css';

export interface EyeProps {
    pos: 'right' | 'left';
    className?: string;
}

export const Eye: React.SFC<EyeProps> = (props: EyeProps) => (
    <div {...style('root', { pos: props.pos }, props)}>
        <div {...style('brow')} />
        <div {...style('socket')} >
            <div {...style('lid')} />
            <span {...style('pupil')} />
        </div>
    </div>
);
