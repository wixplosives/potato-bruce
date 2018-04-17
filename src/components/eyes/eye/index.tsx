import * as React from 'react';
import style from './index.st.css';

export interface EyeProps {
    role: 'left' | 'right';
}

export const Eye: React.SFC<EyeProps & { className?: string }> = (props: EyeProps) => (
    <div {...style('root', { role: props.role }, props)}>
        {props.role + " eye"}
    </div>
);
