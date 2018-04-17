import * as React from 'react';
import { PotatoBruce } from './potato-bruce';
import style from './app.st.css';

export const App: React.SFC<{ className?: string }> = (props) => (
    <div {...style('root', {}, props)}>
        <PotatoBruce />
    </div>
);
