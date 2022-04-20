import React from "react";
import "./Footer.css";
import heartIcon from "../../assets/heart.png";
import githubIcon from "../../assets/github.png";
import linkedIcon from "../../assets/linkedin.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with <img src={heartIcon} alt="heart"></img> by Tushar, Agrim,
        Thiru & Saurav
      </p>{" "}
      <div className="icons">
        <a href="https://github.com/toBeDone/" className="githubIcon">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};
export default Footer;
