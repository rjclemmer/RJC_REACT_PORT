import React from 'react';
import screenBJ from '../../assets/projects/screenshot_BobbyJ.jpg';
import screenTeam from '../../assets/projects/screenshot_Team.jpeg';
import screenWeather from '../../assets/projects/screenshot-w.png';
import socialMedia from '../../assets/projects/social_media_screenshot.png';
import robbieprez from '../../assets/projects/robbieprez.png';

export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <img src={robbieprez} alt="Robbie 4 Prez" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Robbie 4 Prez</h5>
              <a href="https://github.com/rjclemmer/Robbie4President" className="btn btn-primary">Check it out</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="card">
            <img src={screenBJ} alt="BobbyJ ECommerce" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">BobbyJ ECommerce</h5>
              <a href="https://github.com/rjclemmer/BobbyJ_ECommerce" className="btn btn-primary">Check it out</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="card">
            <img src={screenTeam} alt="My Dogs" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">RJC Team Maker</h5>
              <a href="https://github.com/rjclemmer/RJC_Team_Maker" className="btn btn-primary">Go to Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="card">
            <img src={screenWeather} alt="Rainbow on Jefferson St." className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">RJC Weather App 1</h5>
              <a href="https://github.com/rjclemmer/rjc-WeatherApp" className="btn btn-primary">Go to Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="card">
            <img src={socialMedia} alt="BJ's Social Network" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">BJ's Social Network</h5>
              <a href="https://github.com/rjclemmer/BJs_Social_Network" className="btn btn-primary">Check it out! </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
