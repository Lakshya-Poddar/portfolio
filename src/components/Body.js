import React,{useContext} from 'react'
import {Context} from '../Context'
import Img from '../images/self.png'
function BodyRight() {
    const {darkmode} =useContext(Context)
    return (
        <div className={darkmode?"bodycssdarkmode":"bodycsslightmode"}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 justify-content-center my-auto leftside">
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="imgmain"  >
                        <img src={Img} className={darkmode?"img-fluid imgcssdarkmode":"img-fluid imgcsslightmode"} style={{width:"50%",borderRadius:"50%",padding:"5px"}} alt="img"></img>   
                    </div> 
                    <div className={darkmode?"iconscss iconscssdarkmode":"iconscss iconscsslightmode"}>
                     
                        <a href="https://github.com/Lakshya-Poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-github githubcss "></i></a>
                        <a href="https://www.linkedin.com/in/lakshya-poddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin linkedincss "></i></a>
                        <a href="https://www.instagram.com/lakshyapoddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram instagramcss"></i></a>
                        <a href="https://twitter.com/lakshya_poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter twittercss"></i></a>
                    </div>
                   
                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 content my-auto">
                    <p  className="grey smallfont my-auto"><i>&#60;html&#62;</i></p>
                    <p className="grey smallfont"><i>&#60;body&#62;</i></p><br />
                    <div className="intro my-auto">
                        <h1 className="bigfont mediumfontweight">Hi,</h1>
                        <h1 className="bigfont mediumfontweight">I'm </h1>
                        <h1 className="verybigfont" style={{fontWeight:"500"}}>Lakshya,</h1>
                        <h5 className="grey mediumfont"><b>MERN STACK</b></h5>
                        <h1 className="bigfont lessfontweight">WEB-DEVELOPER</h1>
                    </div><br/>
                    <p className="grey smallfont"><i>&#60;/html&#62;</i></p>
                    <p className="grey smallfont"><i>&#60;/body&#62;</i></p>
                    
                </div>
            </div>
        </div>
    )
}

export default BodyRight
