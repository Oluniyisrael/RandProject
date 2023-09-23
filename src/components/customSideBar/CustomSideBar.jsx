import React from 'react'
import logo from '../../assets/images/R.png'
import arrow from '../../assets/pngs/arrow.png'
import { FaAccessibleIcon } from 'react-icons/fa'
import './CustomSideBar.css'


function CustomSideBar() {
  return (
    <nav id='CusNav'>
        <div id='navCont'>
            <img src={logo} alt="..." id='logo'/>
            <button className='sideBarButton'>
              <img src={arrow} alt="..." className='buttonIcon'/>
            </button>
            {/* <button className='sideBarButton'> */}
              <FaAccessibleIcon/>
            {/* </button> */}
            {/* <FaArrowRight/> */}
                    </div>
    </nav> 
    )
}

export default CustomSideBar