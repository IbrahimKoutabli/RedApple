import React from "react";
import SpaIcon from "@material-ui/icons/Spa";
import { useTranslation } from "react-i18next";

const Montreal = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="page-container monteral">
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
          <div className="town-name">MONTRÉAL</div>
          <div className="town-description">
            Creativity has flowed down every street in Montréal, Quebec
            <br />
            since its inception. Today, the city is a haven for bright pop,
            <br />
            hummable country and raucous rock. Discover the perfect <br />
            gig for you now.
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

export default Montreal;
