import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Contact = () => {

  return (
    <div id="contact">
        <h1 className="text-center p-3" id="title">CONTACT INFORMATION</h1>
        <div className="container">
          <div className="row align-items-center d-flex  justify-content-center" id="contact-info">
              <div className="col-5 "> 
              
                <ul className="align-middle">

                  <li className="p-2">
                  <i className="material-icons p-2">email</i>
                  niqueseats@gmail.com
                  </li>

                  <li className="p-2">
                  <p>
                  <i className="material-icons p-2">call</i>
                  407-754-6556</p>
                  </li>

                  <li className="p-2">
                  <p>
                  <i className="material-icons p-2">location_on</i>
                  Orlando, Florida</p>
                  </li>
                </ul>
              </div>

              <div className="col-4" id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56083.89363755942!2d-81.3841312!3d28.5324043!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1647743123566!5m2!1sen!2sus" width="300" height="300" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
              <p id="map-description">Serving the Orlando area</p>
              </div>


          </div>
        </div>




    </div>
   

  );
};

export default Contact;
