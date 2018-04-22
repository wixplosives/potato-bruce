import * as React from 'react';
import style from './potato-bruce.st.css';

import { Eyes } from './eye-box';
import { Nose } from './nose';

interface PotatoBruceProps {
}

export const PotatoBruce: React.SFC<PotatoBruceProps & { className?: string }> = (props: PotatoBruceProps) => (
    <div {...style('root', {}, props)}>
        <Eyes className={style.eyeBox} />
        <Nose className={style.nose} />
    </div>
);
