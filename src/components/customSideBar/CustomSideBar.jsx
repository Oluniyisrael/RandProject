import React from 'react'
import logo from '../../assets/images/R.png'
import { FaArrowRight } from 'react-icons/fa'
import './CustomSideBar.css'


function CustomSideBar() {
  return (
    <nav id='CusNav'>
        <div id='navCont'>
            <img src={logo} alt="..." id='logo'/>
            
            <FaArrowRight/>
                    </div>
    </nav>
    )
}

export default CustomSideBar