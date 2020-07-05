import React,{useContext} from 'react';
import {Context} from '../Context'
import {NavLink} from 'react-router-dom'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import bootstrap from '../images/bootstrap.png'
import react from '../images/react.png'
import node from '../images/node.png'
import express from '../images/express.png'
import npm from '../images/npm.png'
import mongo from '../images/mongo.png'
import firebase from '../images/firebase.png'

function About() {
    const {darkmode} =useContext(Context)

    return (
        <>
            <div className={darkmode?"bg-dark about p-5 text-light":"about p-5"}>
                <div className="container-fluid">
                            <p className="text-center mx-auto" style={{lineHeight:"2rem",fontSize:"20px"}}><b>Hi there!</b><br /></p>
                            <div className={darkmode?"iconscss iconscssdarkmode":"iconscss iconscsslightmode"}>
                                    <a href="https://github.com/Lakshya-Poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-github githubcss "></i></a>
                                    <a href="https://www.linkedin.com/in/lakshya-poddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin linkedincss "></i></a>
                                    <a href="https://www.instagram.com/lakshyapoddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram instagramcss"></i></a>
                                    <a href="https://twitter.com/lakshya_poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter twittercss"></i></a>
                                    <a href="mailto:lakshyapoddar1604@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope emailcss"></i></a>

                            </div>
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <p className="text-center mx-auto" style={{lineHeight:"2rem",fontSize:"20px"}}>
                                        I am 21 years old and have always had a keen interest in the field of<i> Innovation & Technology</i> since
                                        my senior school days. With hours of <i>learning, practise </i>and<i> sedulous efforts</i>, I have become a<br></br><b style={{fontSize:"25px"}}><i> FullStack (MERN) Web Developer</i></b>.<br/>
                                        <br></br>Being cognoscenti about this field, I have worked on serveral <b><NavLink to="/projects" style={{textDecoration:"none",color:"gray"}} >projects</NavLink></b> by implementing the latest technology.
                                        Being inexperienced never hampered my growth. I have learnt from scratch, integrated <b>APIs</b>, worked with<b> MongoDB</b>,
                                        and lately I have taken up<b> Competitive Coding </b>and <b>Firebase</b> as my new Challenge.
                                        <br/><br></br><i>Mentioned below are my skills:</i>
                                    </p>
                                </div>
                            </div>
                
                <h3 className="text-center mt-5"><b><u>FRONT-END</u></b></h3><br />
                <div className="row ">
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={html} className="img-fluid " style={{maxHeight:"120px"}}  alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={css} className="img-fluid mx-auto"  style={{maxHeight:"120px"}}  alt="skills"/>
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={javascript} className="img-fluid  " style={{maxHeight:"120px"}}  alt="skills"/>
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={bootstrap} className="img-fluid " style={{maxHeight:"120px"}}  alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={react} className="img-fluid " style={{maxHeight:"120px"}}  alt="skills" />
                    </div>
                </div>
                <h3 className="text-center mt-5"><b><u>BACK-END</u></b></h3><br />
                <div className="row ">
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={node} className="img-fluid pt-4" style={{maxHeight:"150px"}} alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={express} className="img-fluid "  style={{maxHeight:"150px"}} alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={mongo} className="img-fluid  " style={{maxHeight:"150px"}} alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={firebase} className="img-fluid " style={{maxHeight:"150px"}}  alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={npm} className="img-fluid pt-5" style={{maxHeight:"150px"}}  alt="skills" />
                    </div>
                </div>
            </div>
            </div>
            
            
            </>
          )
}

export default About
