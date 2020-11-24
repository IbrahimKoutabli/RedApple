import React from "react";
import SpaIcon from "@material-ui/icons/Spa";
import { useTranslation } from "react-i18next";

const Toronto = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="page-container toronto">
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
          <div className="town-name">{t("TORONTO")}</div>
          <div className="town-description">
            Toronto's music scene took centre stage in the 1960s with
            <br />
            Yorkville and the Yonge Street Strip becoming the two main
            <br />
            focal points where crowds could seek out the best folk, rock
            <br />
            and R&B inpired sounds. Find your perfect gig now.
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

export default Toronto;
