import React from 'react';
import ak from '../../assets/me/ak.jpg';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  return (
       <div className="d-flex justify-content-center align-items-center flex-column">
      <img
        src={ak}
        className="my-2"
        style={{ width: "25%", height: "25%" }}
        alt="cover"
      />
      <h1>Robert J Clemmer</h1>
      <p>
      Robert grew up in Staunton and after college spent time working outdoors
       with conservation programs in northern New Mexico, Arizona, and Lancaster, 
       Pennsylvania. After adventuring in Alaska as a dog musher, Robert discovered 
       a passion for farming as an Environmental Educator at the Rock Eagle 4H Center 
       in Georgia, managing the farm at their History site. In 2018, Robert moved back 
       home and is continuing his farming journey.

      Robert has a degree in History and a degree in Classical Studies from Hampden Sydney College. 
      He is also a Master Gardener and has a Blue Ribbon for his tomatoes. When he’s not on the farm, 
      Robert is either playing mandolin, trail running, 3D printing, or spending time with his two dogs.
      </p>
      
    </div>
  );
}
