import React from "react";
import profile from "../../assets/profile2.jpg";
import "./style.css";

const About = () => {
  return (
    <div className="row g-0" id="about-section">
      <div className="col-md-4" id="profile">
        <img
          src={profile}
          className="img-fluid rounded-3 p-4"
          alt="owner of Nique's Eats"
          id="profile-img"
        />
      </div>

      <div className="col-md-8" id="about-text">
        <div className="card-body">
          <h5 className="card-title text-center p-4" id="about">
            ABOUT NIQUE'S EATS
          </h5>
          <p className="card-text about">
            Nique, a culinary virtuoso with a heart as warm as the southern sun,
            hails from a quaint small town where comfort food isn't just a meal;
            it's a way of life. From an early age, the tantalizing aromas
            wafting from her grandmother's kitchen captivated her senses,
            sparking a passion that would eventually lead her to the bustling
            kitchens of her dreams. Nique's journey from a small-town girl with
            big aspirations to the proud owner of Nique's Eats is nothing short
            of inspiring.
          </p>
          <p className="card-text about">
            Driven by an unyielding desire to share the flavors of her southern
            roots, Nique embarked on a culinary adventure that took her from
            renowned culinary schools to the heart of the food industry.
            However, her true breakthrough came when she decided to return to
            her roots and launch Nique's Eats, a business dedicated to crafting
            and delivering homemade meals that embody the soulful essence of
            southern comfort. Through her venture, Nique doesn't just feed her
            customers; she brings a taste of home to their tables, connecting
            them to the warmth and love that defines her small-town upbringing.
          </p>
          <p className="card-text about">
            In the bustling world of culinary entrepreneurship, Nique's Eats
            stands out as a testament to authenticity and passion. Nique's story
            is a testament to the belief that no dream is too big, and no town
            is too small for a southern girl with a skillet full of dreams.
            Today, as she juggles the demands of her bustling kitchen and the
            joy of delivering a slice of southern hospitality to her patrons,
            Nique continues to inspire those who taste her creations and
            experience the love that goes into each and every dish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
