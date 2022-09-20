
  import React, { useRef, useState } from 'react'
  import 'react-pro-sidebar/dist/css/styles.css';
  import { SiReactos } from 'react-icons/si';
  import './sidebar.scss';
  import { NavLink, } from "react-router-dom";
  import { Nav } from 'react-bootstrap';

  const Sidebar = ({routes, image, color,id}) => {
    function handleClick () {
      const wrapper = document.getElementById('sidebar__id')
      wrapper.classList.toggle('is-nav-open')
    }
  

    return (
      <div className="sidebar" data-color={color} data-img={image} id={id}>

          <div
          className="sidebar-background"
          style={{
            backgroundImage: "url(" + image + ")"
          }}
        />
        <div className='sidebar__wrapper'>
        
          <div className='side__header'>
            <a className="simple-text" href="*">
            <SiReactos/>   <span className='sidebar__logo-title'>Universum</span>

            </a>
          </div>

          {/* <SiReactos
              className='icon__toggle'
              onClick={() => handleClick()}
            /> */}
            
            <Nav className='nav__section'>
              {routes.map((route, key) => {
                return(
                <li 
                  key={key}
                >
                <NavLink
                  to={route.path}
                  className="sidebar-link"
                >

                  <i className='sidebar__icon'>{route.icon}</i>
                  <p className='sidebar__title'>{route.name}</p>
                </NavLink>
                </li>
                )
              })}
            </Nav>
        </div>
      </div>

    )
  }

  export default Sidebar