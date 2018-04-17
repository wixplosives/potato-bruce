import * as React from 'react';
import style from './index.st.css';

export interface NoseProps {
}

export const Nose: React.SFC<NoseProps & { className?: string }> = (props: NoseProps) => (
    <div {...style('root', {}, props)} >
        NOSE
    </div>
);
