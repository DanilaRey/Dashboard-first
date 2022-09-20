import React from 'react'
import { Badge, Button, Dropdown, Form } from 'react-bootstrap'
import {AiFillSetting } from 'react-icons/ai';
import sideBarImage1 from '../../assets/img/sidebar-1.jpg'
import sideBarImage2 from '../../assets/img/sidebar-2.jpg'
import sideBarImage3 from '../../assets/img/sidebar-3.jpg'
import './FixedPlugin.css'

const FixedPlugin = ({image, setImage, hasImage, setHasImage, color, setColor}) => {
  return (
    <div className='fixed__plugin'>
        <Dropdown>
            <Dropdown.Toggle className='fixed__item'>
                <AiFillSetting className='fixed__plugin-icon'/>
            </Dropdown.Toggle>
            <Dropdown.Menu id='dropdown__menu-section'>
                <li className='adjustments-line'>
                    <p>Background image</p>
                    <Form.Check
                        type='switch'
                        checked={hasImage}
                        onChange={setHasImage}
                    />
                </li>
                <li className="header-title">Sidebar Images</li>
                <div className='showcase__sidebar'>
                <li className={image === sideBarImage1 ? "active" : ""}>
                    <a
                        className='img-holder'
                        onClick={(e) => {
                            e.preventDefault()
                            setImage(sideBarImage1)
                        }}
                    >
                        <img alt="..." src={sideBarImage1}></img>
                    </a>
                </li>
                <li className={image === sideBarImage2 ? "active" : ""}>
                    <a
                        className='img-holder'
                        onClick={(e) => {
                            e.preventDefault()
                            setImage(sideBarImage2)
                        }}
                    >
                        <img alt="..." src={sideBarImage2}></img>
                    </a>
                </li>
                <li className={image === sideBarImage3 ? "active" : ""}>
                    <a
                        className='img-holder'
                        onClick={(e) => {
                            e.preventDefault()
                            setImage(sideBarImage3)
                        }}
                    >
                        <img alt="..." src={sideBarImage3}></img>
                    </a>
                </li>
                
                </div>   
                <div className='showcase__button'>
                    <Button  className='showcase__button-buy'>BUY NOW</Button>
                    <Button className='showcase__button-doc'>Documentation</Button>
                    <Button className='showcase__button-ver'>Get free version</Button>
                </div>     
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default FixedPlugin