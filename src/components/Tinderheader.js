import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./Tinderheader.css";
import ForumIcon from "@material-ui/icons/Forum";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";

function Tinderheader({ backButton }) {

  const history = useHistory();
  return (
    <div className="icons1__container">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header3__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header1__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png"
          alt="logos"
          className="tinder__logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header2__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Tinderheader;
