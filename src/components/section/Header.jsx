import React from 'react'

//아이콘//
import { FiFolder } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
          <a href='/'>
          <em aria-hidden='true'></em>
          <span>webs<br/>youtube</span>
          </a>
        </h1>
        <nav className='header__menu'>
          <ul className='menu'>
          <li className='active'>
            <a href='/'> Ahnyoutube</a>
          </li>
          <li>
            <a href='/today'><FiFolder/> 추천영상</a>
          </li>
          <li>
            <a href='/developer'><FiHeart/> 내가 즐겨찾는 개발자 유튜버</a>
          </li>
          <li>
            <a href='/music'><FiMusic /> 코딩공부 할때듣는음악추천</a>
          </li>
        </ul>
        <div className='header__sns'>
        <li>
         <a href='https://github.com/AhnHEYJI?tab=repositories' rel='noopener noreferrer'><AiFillGithub /> MY Github</a>
        </li>
        </div>
        </nav>

     
        
    
        </header>
  )
}

export default Header 