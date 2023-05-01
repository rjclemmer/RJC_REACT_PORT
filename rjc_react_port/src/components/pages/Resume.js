import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import TAKE_OFF from "../../assets/me/TAKE_OFF.MP4";
import qcs_pic from "../../assets/me/qcs_pic.jpg";
import pg from "../../assets/me/pg.jpg";
import mbu from "../../assets/me/mbu.jpg";
import lilgoat from "../../assets/me/lilgoat.jpg";
import snake from "../../assets/me/snake.jpg";
import owl from "../../assets/me/owl.jpg";
import chainsaw from "../../assets/me/chainsaw.jpg";
import bigcoat from "../../assets/me/bigcoat.jpg";
import jigsaw from "../../assets/me/jigsaw.jpg";
import saw2 from "../../assets/me/saw2.jpg";
import harness from "../../assets/me/harness.jpg";
import snow from "../../assets/me/snow.jpg";
import gardenstate from "../../assets/me/gardenstate.jpg";

export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <a href="https://github.com/rjclemmer/RJC_REACT_PORT/blob/main/rjc_react_port/src/assets/Resume%20RJC%20040823.pdf">
        Click here to download my resume from my Github profile where it is
        hosted!
      </a>

      <div class="container text-center mt-5 mb-5">
        <h1>Experiences</h1>
        <div class="row justify-content-center mt-5 ">
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                Queen City Silviculture. Arborist. Staunton, VA 24401
              </div>
              <div class="col">
              <img
                src={qcs_pic}
                className="d-block w-100"
                alt="In a tree!"
                // style={{ height: "500px" }}
              />
              </div>
              <div class="col">
                <p>
                  Assisted with pruning, tree removal, and tree planting.
                  Operated and maintained arboriculture equipment, ensuring
                  safety protocols were followed. Assisted in the maintenance of
                  equipment and heavy machinery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="row align-items-start">
            <div class="col">
            <img
                src={pg}
                className="d-block w-100"
                alt="at a market"
                // style={{ height: "500px" }}
              />
            </div>
            <div class="col">
              Grew over 25,000 lbs of food for the Staunton, Augusta County,
              Waynesboro area. Operated a 40 person CSA spanning June - October.
              Adopted No-Till practices to increase soil health Managed the
              Youth Leaders in Agriculture program, a team of 5 students who
              were at the farm
            </div>
            <div class="col">
              Project Grows. Farm Manager and Farm Educator. Staunton, VA.
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="row align-items-start">
            <div class="col">
              Recruited students from Southwest and Southside VA to MBU’s
              biggest class. Contacting families and answering questions about
              academic options. Traveled for two seasons throughout rural
              Southwest and Southside VA, meeting with school counselors,
              teachers, students, and families. Collaborating with the Spencer
              Center for Civic and Global Engagement, organized and led an
              Alternative Spring Break trip focusing on food justice.
            </div>
            <div class="col">
              Mary Baldwin University. Admissions Counselor. Staunton, VA.
            </div>
            <div class="col"><img
                src={mbu}
                className="d-block w-100"
                alt="In a tree!"
                // style={{ height: "500px" }}
              /></div>
          </div>
          <div class="row align-items-center mt-5">
            <div class="col">
              Rock Eagle Environmental Education Program. Program Specialist and
              Environmental Educator. Eatonton, GA.
            </div>
            <div class="col">
            <Carousel
            id="carouselExampleControls"
            className="slide"
            data-bs-ride="carousel"
          >
            <Carousel.Item className="active">
              <img
                src={owl}
                className="d-block w-100"
                alt="cover"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={lilgoat}
                className="d-block w-100"
                alt="goat"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={snake}
                className="d-block w-100"
                alt="acc"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
            </div>
            <div class="col">
              Trained staff to teach 7 classes. Managed teams to maintain ¼ acre
              garden, our Pioneer site, and canoeing program areas; Oversaw the
              history program and garden program. Developed a curriculum for new
              Garden/Botany Class. Wrote grant application and received $1990
              from Watson Brown Foundation for Rock Eagle’s pioneer site.
              Incorporated goats, farming, and blacksmithing into Living History
              program. Helped organize Seed Swap targeted to gardeners,
              farmers,and beginners in Middle Georgia.
            </div>
          </div>
          <div class="row align-items-center mt-5">
            <div class="col"><img
                src={chainsaw}
                className="d-block w-100"
                alt="In a tree!"
                // style={{ height: "500px" }}
              /></div>
            <div class="col">
              Supervised a crew of four to monitor, rehabilitate, and conserve
              wild lands and preserves throughout Lancaster County. Directed
              volunteers during Conservancy Work Weekends. Developed and
              facilitated environmental education hikes for students focusing on
              watershed studies Represented LCC at the Susquehanna Permaculture
              Conference. Organized and coordinated a Volunteer day with the
              Pennsylvania Dutch Council and Cycling for Conservation
            </div>
            <div class="col">
              Lancaster County Conservancy. Stewardship Crew Leader. Lancaster,
              PA.
            </div>
          </div>
          <div class="row align-items-center mt-5">
            <div class="col">
              Provided an interpretive experience for guests, accommodating
              their needs in subzero conditions. Responsible for caring and
              feeding 100 Alaskan huskies at an Iditarod winning kennel. Worked
              with the Chugiak Mushing Club and the Alaska State Parks to clear
              and maintain public trails.
            </div>
            <div class="col">
              Alaska Dog Sled Tours. Dog Musher/ Guide. Willow, AK.
            </div>
            <div class="col">
              <div class="col">
                <video width="320" height="240" controls>
                  <source src={TAKE_OFF} type="video/mp4"></source>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div class="col"><Carousel
            id="carouselExampleControls"
            className="slide"
            data-bs-ride="carousel"
          >
            <Carousel.Item className="active">
              <img
                src={bigcoat}
                className="d-block w-100"
                alt="cover"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={jigsaw}
                className="d-block w-100"
                alt="goat"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={saw2}
                className="d-block w-100"
                alt="acc"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={harness}
                className="d-block w-100"
                alt="acc"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={snow}
                className="d-block w-100"
                alt="acc"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel></div>
          </div>
          <div class="row align-items-center mt-5">
            <div class="col">
              Garden State Council, BSA. District Executive. Mt. Holly, NJ.
            </div>
            <div class="col"><img
                src={gardenstate}
                className="d-block w-100"
                alt="In a tree!"
                // style={{ height: "500px" }}
              /></div>
            <div class="col">
              Provided service to over 1,500 youth and hundreds of volunteers
              through Burlington County. Developed relationships with schools,
              civic organizations, and religious organizations to promote
              Scouting and the outdoors. Worked with volunteers to coordinate
              camporees, recruiting nights, training opportunities, and
              fundraising events. Responsible for recruiting, coaching, and
              guiding a volunteer board and executing an annual fund drive
              raising more that $27,000. Working with Burlington County Special
              Services School, coordinated outdoor program for inner city youth
              from Trenton, NJ Organized First annual and Second Annual Wine
              Tasting event, generating over $10,000 for outdoor program
            </div>
          </div>

          <div class="row justify-content-evenly mb-5">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
          </div>
        </div>
      </div>
    </div>
  );
}
