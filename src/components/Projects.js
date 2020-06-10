import React from 'react'
import {Card} from 'react-bootstrap'
import BeachResort from '../images/beachresort.jpeg'
import Ehousie from '../images/ehousie.png'
import DownNine from '../images/downnine.png'
import MobileStore from '../images/mobilestore.png'
function Projects() {
    return (
        <>
        <div className="row container mx-auto pb-4">
            
            <Card className=" text-white col-md-4 mx-auto col-12 my-auto pt-4 card-hover" style={{border:"0"}}>
            <a href="https://lakshya-beach-resort.netlify.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={BeachResort} style={{filter: "brightness(30%)",minHeight:"px"}} className="img-fluid"  alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center p-5  my-auto text-uppercase"><h3><b>Beach Resort</b></h3></Card.Title>
                        <Card.Text className="text-justify p-3  pb-5">
                        A website to understand and implement the features of a proper Resort site (Details and Bookings).Made with ReactJS and hosted on Netlify.
                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            
            <Card className=" text-white col-md-4 mx-auto col-12 my-auto  pt-4 card-hover" style={{border:"0"}}>
            <a href="https://ehousie.web.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={Ehousie} style={{filter: "brightness(20%)"}} className="img-fluid"  alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center my-auto p-5"><h3><b>E-HOUSIE</b></h3></Card.Title>
                        <Card.Text className="text-justify p-3 pb-5">
                        A Web-App designed so that the users don't require a Housie board to play the game. Made with ReactJS, used React State and hosted on Firebase.                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            <Card className=" text-white col-md-4 mx-auto col-12 my-auto  pt-4 card-hover" style={{border:"0"}}>
            <a href="https://downnine.netlify.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={DownNine} style={{filter: "brightness(20%)"}} className="img-fluid"  alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center p-5 my-auto text-uppercase"><h3><b>DOWNNINE</b></h3></Card.Title>
                        <Card.Text className="text-justify p-3 pb-5">
                        An online food ordering functional Front-end website with proper Menu and Cart pages. Made with ReactJS and hosted on Netlify.                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            <Card className=" text-white col-md-4 col-12 my-auto  pt-4 card-hover" style={{border:"0"}}>
            <a href="https://lakshya-mobile-store.netlify.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={MobileStore} style={{filter: "brightness(20%)",backgroundColor:"black"}} className="img-fluid"  alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center p-5 my-auto text-uppercase"><h3><b>MOBILE-STORE</b></h3></Card.Title>
                        <Card.Text className="text-justify p-3 pb-3">
                        A traditional E-Commerce website built using ReactJS from which I learnt the working that goes unseen to a regular user and made a proper checkout option(using PayPal).
                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            
            </div>
            
            </>
    )
}

export default Projects
