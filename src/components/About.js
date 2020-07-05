import React,{useContext} from 'react';
import {Context} from '../Context'


function About() {
    const {darkmode} =useContext(Context)

    return (
        <>
            <div className={darkmode?"bg-dark about p-5 text-light":"about p-5"}>
                <div className="container-fluid">
                            <p className="text-center mx-auto" style={{lineHeight:"2rem",fontSize:"20px"}}>
                            <b>Hi there!</b><br /></p>
                                <div className={darkmode?"iconscss iconscssdarkmode":"iconscss iconscsslightmode"}>
                                    <a href="https://github.com/Lakshya-Poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-github githubcss "></i></a>
                                    <a href="https://www.linkedin.com/in/lakshya-poddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin linkedincss "></i></a>
                                    <a href="https://www.instagram.com/lakshyapoddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram instagramcss"></i></a>
                                    <a href="https://twitter.com/lakshya_poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter twittercss"></i></a>
                                    <a href="mailto:lakshyapoddar1604@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope emailcss"></i></a>

                                </div>
                                <div className="row">
                                <div className="col-10 mx-auto">
                                <p className="text-center mx-auto" style={{lineHeight:"2rem",fontSize:"20px"}}>

                                I am 21 years old and have always had a keen interest in the field of<i> Innovation & Technology</i> since
                                my senior school days. With hours of <i>learning, practise </i>and<i> sedulous efforts</i>, I have become a<br></br><b style={{fontSize:"25px"}}><i> FullStack (MERN) Web Developer</i></b>.<br/>
                                <br></br>Being cognoscenti about this field, I have worked on serveral projects by implementing the latest technology.
                                Being inexperienced never hampered my growth. I have learnt from scratch, integrated <b>APIs</b>, worked with<b> MongoDB</b>,
                                and lately I have taken up<b> Competitive Coding </b>and <b>Firebase</b> as my new Challenge.
                                <br/><br></br>Mentioned below are my skills:
                            </p>
                            </div>
                            </div>

                        </div>
                    </div>
            
            
            </>
          )
}

export default About
