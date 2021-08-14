import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "../Context";
import Ehousie from "../images/ehousie.png";
import DownNine from "../images/downnine.png";
import SlashIt from "../images/slashit.png";
import FaceMeet from "../images/facemeet.png";
import NavHeader from "./NavHeader";

function Projects() {
  const { darkmode } = useContext(Context);

  return (
    <div className={darkmode ? "custom-container-dark" : "custom-container-light"}>
      <NavHeader />
        <div className="row mx-auto py-1">
          <Card
            className={
              darkmode
                ? "projectsdarkmode text-white col-lg-4 mx-auto col-12 card-hover"
                : "text-white col-lg-4 mx-auto col-12 card-hover"
            }
            style={{ border: "0", marginTop: "20px" }}
          >
            <a
              href="https://slashit.herokuapp.com"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                src={SlashIt}
                style={{ filter: "brightness(45%)" }}
                className=""
                alt="Card image"
              />
              <Card.ImgOverlay className="">
                <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center">
                  <h3>
                    <b>Slash It</b>
                  </h3>
                </Card.Title>
                <Card.Text
                  className="text-center d-flex justify-content-center align-items-center"
                  style={{ height: "58%" }}
                >
                  A website to shorten URL Links with a customizable hash and
                  user authentication.Made with ReactJS, NodeJS, Express and
                  hosted on Heroku.
                </Card.Text>
              </Card.ImgOverlay>
            </a>
          </Card>
          <Card
            className={
              darkmode
                ? "projectsdarkmode text-white col-lg-4 col-12 card-hover"
                : "text-white col-lg-4 col-12 card-hover"
            }
            style={{ border: "0", marginTop: "20px" }}
          >
            <a
              href="https://facemeet.herokuapp.com"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                src={FaceMeet}
                style={{ filter: "brightness(45%)", backgroundColor: "black" }}
                className=""
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center">
                  <h3>
                    <b>Face-Meet</b>
                  </h3>
                </Card.Title>
                <Card.Text
                  className="text-center  d-flex justify-content-center align-items-center"
                  style={{ height: "58%" }}
                >
                  A video calling web-app along with real time messaging.Made
                  with Express, PeerJS, Socket.IO, NodeJS, JavaScript and hosted
                  on Heroku.
                </Card.Text>
              </Card.ImgOverlay>
            </a>
          </Card>
          <Card
            className={
              darkmode
                ? "projectsdarkmode text-white col-lg-4 mx-auto col-12 card-hover"
                : "text-white col-lg-4 mx-auto col-12 card-hover"
            }
            style={{ border: "0", marginTop: "20px" }}
          >
            <a
              href="https://ehousie.web.app"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                src={Ehousie}
                style={{ filter: "brightness(45%)" }}
                className=""
                alt="Card image"
              />
              <Card.ImgOverlay className="">
                <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center">
                  <h3>
                    <b>E-HOUSIE</b>
                  </h3>
                </Card.Title>
                <Card.Text
                  className="text-center d-flex justify-content-center align-items-center"
                  style={{ height: "58%" }}
                >
                  A Web-App designed so that the users don't require a Housie
                  board to play the game. Made with ReactJS, used React State
                  and hosted on Firebase.{" "}
                </Card.Text>
              </Card.ImgOverlay>
            </a>
          </Card>
          <Card
            className={
              darkmode
                ? "projectsdarkmode text-white col-lg-4  col-12 card-hover"
                : "text-white col-lg-4  col-12 card-hover"
            }
            style={{ border: "0", marginTop: "20px" }}
          >
            <a
              href="https://downnine.netlify.app"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                src={DownNine}
                style={{ filter: "brightness(45%)" }}
                className=""
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center text-uppercase h-25 d-flex justify-content-center align-items-center">
                  <h3>
                    <b>DOWNNINE</b>
                  </h3>
                </Card.Title>
                <Card.Text
                  className="text-center  d-flex justify-content-center align-items-center"
                  style={{ height: "58%" }}
                >
                  An online food ordering functional Front-end website with
                  proper Menu, Cart and Checkout page . Made with ReactJS and
                  hosted on Netlify.{" "}
                </Card.Text>
              </Card.ImgOverlay>
            </a>
          </Card>
        </div>
      </div>
  );
}

export default Projects;
