import React from 'react'
import logo from '../../assets/images/R.png'
import './CustomSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CustomSideBar() {
  return (
    <nav id='CusNav'>
        <div id='navCont'>
            <img src={logo} alt="..." id='logo'/>
            <FontAwesomeIcon icon={["far", "coffee"]} />
            <i class="far fa-gem fa-spin fa-3x"></i>
                    </div>
    </nav>
    )
}

export default CustomSideBar