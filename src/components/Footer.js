import React,{useContext} from 'react'
import {Context} from '../Context'

function Footer() {
    const {darkmode}=useContext(Context)
    return (
        <div className={darkmode?"footercssdarkmode":"footercsslightmode"}>
            <p>Made with <span style={{color:"#a83f39",fontSize:"16px"}}>&hearts;</span> | Lakshya </p>
            
        </div>
    )
}

export default Footer
