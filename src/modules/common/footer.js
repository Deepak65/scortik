import React from "react";

function Footer() {
  return (
    <div className="main-div-footer">
      <div className="footer-cont-div mb-47-px">
        <div className="footer-cont-column pt-30 mb-footer-column">
          <img src="https://scortik.com/wp-content/uploads/2022/06/scortik_foot.svg" className="mb-logo-scor"/>
          <div className="footer-btn-column gp-30-btn mb-btn-gap">
            <p className="ft-div-btn mb-fs-14">Privacy Policy</p>
            <p className="ft-div-btn mb-fs-14">Contact Us</p>
            <p className="ft-div-btn mb-fs-14">FAQs</p>
          </div>
        </div>
        <hr className="break-line-hr mb-margin-0" />
        <div className="footer-cont-column mb-column-direction">
          <p className="align-content-ft">©2022 Scortik. All Rights Reserved.</p>
          <div className="footer-btn-column">
            <div className="social-div-background">
            <img className="facebook-icon-img" src="https://scortik.com/wp-content/uploads/2022/06/Facebook.svg" />
            </div>
           <div className="social-div-background">
            <img className="div-icons-social" src="https://scortik.com/wp-content/uploads/2022/06/twitter_bird_icon.svg" />
            </div>
            <div className="social-div-background pt-0">
            <img className="icons-img-social" src="https://scortik.com/wp-content/uploads/2022/06/Redditt.svg" />
            </div>
            <div className="social-div-background">
            <img className="div-icons-social" src="https://scortik.com/wp-content/uploads/2022/06/discord_icon.svg" />
            </div>
            <div className="social-div-background">
            <img
              className="div-icons-social"
              src="https://scortik.com/wp-content/uploads/2022/06/8547122_telegram_plane_icon.svg"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
