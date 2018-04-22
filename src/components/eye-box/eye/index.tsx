import * as React from 'react';
import style from './index.st.css';

export interface EyeProps {
}

export const Eye: React.SFC<EyeProps & { className?: string }> = (props: EyeProps) => (
    <div {...style('root', {}, props)}>
        <div {...style('lid', { openess: 25 })}>
        </div>
        <span {...style('pupil')}/>
    </div>
);
