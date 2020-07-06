import React from 'react';
import './header.styles.scss'
import logo from '../../images/logo.png'
import user from '../../images/user.jpg'
import {ReactComponent as  Chat} from '../../images/SVG/chat.svg';
import {ReactComponent as  Magnifying} from '../../images/SVG/magnifying-glass.svg';
import {ReactComponent as  Book} from '../../images/SVG/bookmark.svg';

const Header = () => (
        <header className="header">
           <img src={logo} alt="trillo" className="logo" />

           <form action="#" className="search">
               <input type="text" className="search__input" placeholder="Search hotels" />
               <button className="search__button">
                   <svg className="search__icon">
                   <Magnifying />
                   </svg>
               </button>
           </form>

           <nav className="user-nav">
               <div className="user-nav__icon-box">
                   <svg className="user-nav__icon">
                       <Book/>
                   </svg>
                   <span className="user-nav__notification">7</span>
               </div>
               <div className="user-nav__icon-box">
                   <svg className="user-nav__icon">
                       <Chat />
                   </svg>
                   <span className="user-nav__notification">13</span>
               </div>
               <div className="user-nav__user">
                   <img src={user} alt="user photo" className="user-nav__user-photo"/>
                   <span className="user-nav__user-name">jonas</span>
               </div>
           </nav>
        </header>
      
  
)

export default Header