import React from "react";
import ak from "../../assets/me/ak.jpg";
import goat from "../../assets/me/goat.jpg";
import gardener from "../../assets/me/gardener.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Carousel
            id="carouselExampleControls"
            className="slide"
            data-bs-ride="carousel"
          >
            <Carousel.Item className="active">
              <img
                src={ak}
                className="d-block w-100"
                alt="cover"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={goat}
                className="d-block w-100"
                alt="goat"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={gardener}
                className="d-block w-100"
                alt="acc"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <h1>Robert J Clemmer</h1>
          <p>
            Robert grew up in Staunton and after college spent time working
            outdoors with conservation programs in northern New Mexico, Arizona,
            and Lancaster, Pennsylvania. After adventuring in Alaska as a dog
            musher, Robert discovered a passion for farming as an Environmental
            Educator at the Rock Eagle 4H Center in Georgia, managing the farm
            at their History site.
            
            </p>

            <p class="mt-3">
             After moving back to the hometown, Robert
            reconnected with a bandmate, who introduced him to coding. Tinkering
            on little projects, Robert decided to enroll in a coding course and
            eventually learned: JavaScript, HTML, CSS, SQL Front-end Libraries:
            React, Tailwind CSS, Bootstrap, JQuery, Handlebars.js Back-end
            Technologies: Node.js, Express, Sequelize, Mongoose, RESTful API
            Databases: MySQL, MongoDB, IndexDB .</p>

            <p class="mt-3">
            
            Robert has a degree in History
            and a degree in Classical Studies from Hampden Sydney College. He is
            also a Master Gardener and has a Blue Ribbon for his tomatoes. When
            he’s not on the farm, Robert is either playing mandolin, trail
            running, 3D printing, or spending time with his two dogs.
          </p>
        </div>
      </div>
    </div>
  );
}
