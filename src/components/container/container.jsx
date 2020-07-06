import React from 'react';

import './container.scss';
import SideBar from '../sidebar/sidebar.comp';
import Main from '../main/main.comp';

const Content = () => (
    <div className="content">
       <SideBar />
       <Main />
    </div>
)

export default Content