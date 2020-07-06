import React from 'react'

import './layout.styles.scss';
import Header from '../header/header.comp';
import Content from '../container/container';

const LayOut = () => (
    <div className="container">
     <Header />
     <Content />
    </div>
)

export default LayOut