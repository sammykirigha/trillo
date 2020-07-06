import React from 'react';
import './sidebar.styles.scss'
import {ReactComponent as  Home} from '../../images/SVG/home.svg';
import {ReactComponent as  Aircraft} from '../../images/SVG/aircraft-take-off.svg';
import {ReactComponent as  Key} from '../../images/SVG/key.svg';
import {ReactComponent as  Map} from '../../images/SVG/map.svg';




const SideBar = () => (
      <nav className="sidebar">
         <ul className="side-nav">
             <li className="side-nav__item side-nav__item--active">
                 <a href="#" className="side-nav__link">
                     <svg className="side-nav__icon">
                        <Home />
                     </svg>
                     <span>Hotel</span>
                 </a>
             </li>
             <li className="side-nav__item">
                 <a href="#" className="side-nav__link">
                     <svg className="side-nav__icon">
                        <Aircraft />
                     </svg>
                     <span>Flight</span>
                 </a>
             </li>
             <li className="side-nav__item">
                 <a href="#" className="side-nav__link">
                     <svg className="side-nav__icon">
                        <Key />
                     </svg>
                     <span>Car Hire</span>
                 </a>
             </li> <li className="side-nav__item">
                 <a href="#" className="side-nav__link">
                     <svg className="side-nav__icon">
                        <Map />
                     </svg>
                     <span>Tours</span>
                 </a>
             </li>
         </ul>
         <div className="legal"> 
            &copy; 2020 by sammy. All rights reserved.
         </div>
      </nav>
)

export default SideBar