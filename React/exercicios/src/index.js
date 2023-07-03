import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Thiago"/>
            <Filho nome="Roger"/>
            <Filho nome="Blau"/>
            <Filho nome="Blue"/>
        </Pai>
    </div>
);