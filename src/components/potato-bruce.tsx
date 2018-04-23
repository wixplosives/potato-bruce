import * as React from 'react';
import style from './potato-bruce.st.css';

import { EyeBox } from './eye-box';
import { Nose } from './nose';
import { Mouth } from './mouth';

interface PotatoBruceProps {
    mood: 'happy' | 'sad';
}

export const PotatoBruce: React.SFC<PotatoBruceProps & { className?: string }> = (props: PotatoBruceProps) => (
    <div {...style('root', {}, props)}>
        <div {...style('body')}>
            <EyeBox className={style.eyeBox} mood={props.mood} />
            <Nose className={style.noseBox} mood={props.mood} />
            <Mouth mood={props.mood} />
        </div>
    </div>
);
