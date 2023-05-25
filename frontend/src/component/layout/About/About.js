import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="#"
              alt="Founder"
            />
            <Typography>Dayanand Gurjar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @meDayanand-Gurjar. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Message</Typography>
            <h1>Welcome to N_Mart!</h1>

<h3>Discover a World of Shopping Delight</h3>

At N-Mart, we believe that shopping should be an enjoyable and hassle-free experience. With an extensive collection of products, unbeatable prices, and exceptional customer service, we are your go-to destination for all your shopping needs. Whether you're searching for the latest fashion trends, home essentials, electronics, or unique gifts, we've got you covered.

<h3>Shop with Confidence</h3>


Experience the convenience of online shopping with peace of mind. We take pride in offering a secure and seamless shopping environment. Our robust security measures ensure that your personal information remains confidential, and our secure payment gateway guarantees safe transactions. Plus, with our reliable and efficient shipping services, your purchases will arrive at your doorstep in no time.

<h3>Unbeatable Selection</h3> 

Discover an unparalleled selection of products that cater to every taste and lifestyle. From trendy fashion apparel and accessories to cutting-edge gadgets and home décor, our diverse range of products ensures that you'll find exactly what you're looking for. Our dedicated team constantly updates our inventory, so you can stay on top of the latest trends and find the perfect items to suit your needs.

<h3>Shop at N-Mart Today</h3>

Start your shopping journey with us and experience the ultimate convenience, selection, and value. Whether you're a fashion enthusiast, tech lover, or simply looking for the perfect gift, we have everything you need. Discover a world of shopping delight at N-Mart and let us exceed your expectations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
