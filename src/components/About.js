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
                            <p className="text-center mx-auto mb-3" style={{fontSize:"30px"}}><b>Hi there!</b><br /></p>
                            <div className={darkmode?"iconscss iconscssdarkmode":"iconscss iconscsslightmode"}>
                                    <a href="https://github.com/Lakshya-Poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-github githubcss githubabout text-light"></i></a>
                                    <a href="https://www.linkedin.com/in/lakshya-poddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin linkedincss linkedinabout text-light"></i></a>
                                    <a href="https://www.instagram.com/lakshyapoddar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram instagramcss instagramabout text-light"></i></a>
                                    <a href="https://twitter.com/lakshya_poddar" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter twittercss twitterabout text-light"></i></a>
                                    <a href="mailto:lakshyapoddar1604@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope emailcss emailabout text-light"></i></a>

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
                
                <h3 className="text-center mt-5 display-5"><u>FRONT-END</u></h3><br />
                <div className="row bg-light p-2">
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={html} className="img-fluid " style={{maxHeight:"150px"}}  alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={css} className="img-fluid"  style={{maxHeight:"150px"}}  alt="skills"/>
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={javascript} className="img-fluid  " style={{maxHeight:"150px"}}  alt="skills"/>
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={bootstrap} className="img-fluid " style={{maxHeight:"150px"}}  alt="skills" />
                    </div>
                    <div className="col-6 col-md-2 mx-auto">
                        <img src={react} className="img-fluid " style={{maxHeight:"150px"}}  alt="skills" />
                    </div>
                </div>
                <h3 className="text-center mt-5 display-5"><u>BACK-END</u></h3><br />
                <div className="row bg-light p-2">
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
