import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="home-container">
      <div className="canada">
        <span>C</span>
        <span>A</span>
        <span>N</span>
      </div>
      <div className="container">
        <p className="welcome">
          Explore more live music
          <br />
          across Canada
        </p>
        <ul className="nav">
          <li>
            <Link to="vancouver">
              {t("VANCOUVER")}{" "}
              <span className="arrow">
                <ArrowForwardIcon />
              </span>
            </Link>
          </li>
          <li>
            <Link to="montreal">
              {t("MONTRÉAL")}{" "}
              <span className="arrow">
                <ArrowForwardIcon />
              </span>
            </Link>
          </li>
          <li>
            <Link to="toronto">
              {t("TORONTO")}{" "}
              <span className="arrow">
                <ArrowForwardIcon />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bar">
        {t("Travelling In Canada")} <hr />
      </div>
    </div>
  );
};

export default Home;
