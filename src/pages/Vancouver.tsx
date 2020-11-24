import React from "react";
import SpaIcon from "@material-ui/icons/Spa";
import { useTranslation } from "react-i18next";

const Vancouver = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="page-container vancouver">
      <div className="shadow-loader"></div>
      <div className="loader">
        <div className="searching-loader">
          {t("SEARCHING")}{" "}
          <span className="three-dot">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
        <div className="canada-loader">
          <span>C</span>
          <span>A</span>
          <span>N</span>
        </div>
      </div>
      <div className="page">
        <div className="shadow"></div>
        <div className="container">
          <div className="town-name">{t("VANCOUVER")}</div>
          <div className="town-description">
            Vancouver's vibrant musical history stems from inspiration
            <br />
            found in the dramatic natural surroundings that encompass
            <br />
            the city. This stunning setting has helped inspire new pop,
            <br />
            rock and country tunes. Discover your dream gig now.
          </div>
          <div className="canada-page">
            <span className="small-letters">C</span>
            <span className="big-one">A</span>
            <span className="big-second">N</span>
            <span className="big-second">A</span>
            <span className="big-one">D</span>
            <span className="small-letters">A</span>
            <span className="flower">
              <SpaIcon />
            </span>
          </div>
        </div>
        <div className="explore">
          {t("scrollToExplore")} <hr />
        </div>
      </div>
    </div>
  );
};

export default Vancouver;
