import React from "react";
import "../../styles/Footer/AboutUs.css";
import mudye from "../../components/pics/mudye.jpeg";
import Typography from "@material-ui/core/Typography";

function about() {
  return (
    <div className="about">
      <div
        className="aboutbackground"
        style={{ backgroundImage: `url(${mudye})` }}
      ></div>
      <div className="aboutwords">
        <Typography id="AboutUsHeading">About Us</Typography>
        <p>
          In short, in 1958, two college students from Wichita, Kansas, were
          approached by a family friend about opening a pizza parlor in their
          neighborhood. Running a pizza business back then was still relatively
          fresh in America, but the two brothers saw the potential and decided
          to give it a try. So they borrowed US$600 from their mother as a
          start-up capital. They then rented a small building located in a busy
          district and started selling pizzas. But little did they know Pizza
          Hut would become a world-known brand for pizzas, pasta and many
          gourmet delights after half a century later.
        </p>
          <p>
            For more information on Yum Brands, click on:
            <a href="https://www.instagram.com/mudye_disney/">
              <span>https://www.instagram.com/mudye_disney/</span>
            </a>
          </p>
      </div>
    </div>
  );
}

export default about;
