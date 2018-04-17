import * as React from 'react';
import style from './index.st.css';

import { Eye } from './eye';

export interface EyesProps {
}

export const Eyes: React.SFC<EyesProps & { className?: string }> = (props: EyesProps) => (
    <div {...style('root', {}, props)} >
        <Eye {...style('eye')} role="left" />
        <Eye {...style('eye')} role="right" />
    </div>
);
