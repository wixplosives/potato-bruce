import * as React from 'react';
import style from './index.st.css';

import { Eye } from './eye';

export interface EyesProps {
    className?: string;
}

export const EyeBox: React.SFC<EyesProps> = (props: EyesProps) => {
    return <div {...style('root', {}, props)} >
        <Eye {...style('eye')} />
        <Eye {...style('eye')} />
    </div>
};
