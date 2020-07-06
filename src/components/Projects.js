import React,{useContext} from 'react'
import {Card} from 'react-bootstrap'
import {Context} from '../Context'
import BeachResort from '../images/beachresort.jpeg'
import Ehousie from '../images/ehousie.png'
import DownNine from '../images/downnine.png'
import MobileStore from '../images/mobilestore.png'
function Projects() {
    const {darkmode}=useContext(Context)

    return (
        <>
        <div className={darkmode?"projectsdarkmode":""}>
        <div className="row container mx-auto pb-4">
            <Card className={darkmode?"projectsdarkmode text-white col-lg-4 mx-auto col-12 card-hover":"text-white col-lg-4 mx-auto col-12 card-hover"} style={{border:"0",marginTop:"20px"}}>
            <a href="https://lakshya-beach-resort.netlify.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={BeachResort} style={{filter: "brightness(30%)"}} className=""  alt="Card image" />
                <Card.ImgOverlay className="">
                    <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center"><h3><b>Beach Resort</b></h3></Card.Title>
                        <Card.Text className="text-center d-flex justify-content-center align-items-center" style={{height:"58%"}}>
                        A website to understand and implement the features of a proper Resort site (Details and Bookings).Made with ReactJS and hosted on Netlify.
                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            
            <Card className={darkmode?"projectsdarkmode text-white col-lg-4 mx-auto col-12 card-hover":"text-white col-lg-4 mx-auto col-12 card-hover"} style={{border:"0",marginTop:"20px"}}>
            <a href="https://ehousie.web.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={Ehousie} style={{filter: "brightness(20%)"}} className=""  alt="Card image" />
                <Card.ImgOverlay className="" >
                    <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center"><h3><b>E-HOUSIE</b></h3></Card.Title>
                        <Card.Text className="text-center d-flex justify-content-center align-items-center" style={{height:"58%"}}>
                        A Web-App designed so that the users don't require a Housie board to play the game. Made with ReactJS, used React State and hosted on Firebase.                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            <Card className={darkmode?"projectsdarkmode text-white col-lg-4 mx-auto col-12 card-hover":"text-white col-lg-4 mx-auto col-12 card-hover"} style={{border:"0",marginTop:"20px"}}>
            <a href="https://downnine.netlify.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={DownNine} style={{filter: "brightness(20%)"}} className=""  alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center"><h3><b>DOWNNINE</b></h3></Card.Title>
                        <Card.Text className="text-center  d-flex justify-content-center align-items-center" style={{height:"58%"}}>
                        An online food ordering functional Front-end website with proper Menu, Cart and Checkout page . Made with ReactJS and hosted on Netlify.                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            <Card className={darkmode?"projectsdarkmode text-white col-lg-4 col-12 card-hover":"text-white col-lg-4 col-12 card-hover"} style={{border:"0",marginTop:"20px"}}>
            <a href="https://lakshya-mobile-store.netlify.app" style={{textDecoration:"none", color:"white"}}>
                <Card.Img src={MobileStore} style={{filter: "brightness(20%)",backgroundColor:"black"}} className=""  alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center"><h3><b>MOBILE-STORE</b></h3></Card.Title>
                        <Card.Text className="text-center  d-flex justify-content-center align-items-center" style={{height:"58%"}}>
                        A traditional E-Commerce website built using ReactJS from which I learnt the working that goes unseen to a regular user and made a proper checkout option(using PayPal).
                        </Card.Text>
                </Card.ImgOverlay>
                </a>
            </Card>
            </div>
            </div>
            </>
    )
}

export default Projects
