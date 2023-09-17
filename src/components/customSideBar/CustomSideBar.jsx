import React from 'react'
import logo from '../../assets/images/R.png'
import './CustomSideBar.css'

function CustomSideBar() {
  return (
    <nav id='CusNav'>
        <div id='navCont'>
            <img src={logo} alt="..." id='logo'/>
        </div>
    </nav>
    )
}

export default CustomSideBar