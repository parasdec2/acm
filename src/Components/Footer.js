import React from 'react';
import './css/Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer__contact">
        <div className="footer__contact__findus">
          <h4>Find Us</h4>
          <h5>
            Wilson Block <br />
            Chandigarh Group of Colleges <br />
            Landran
          </h5>
        </div>
        <div className="footer__contact__callus">
          <h4>Call Us</h4>
          <h5> +91 7696105002</h5>
        </div>
        <div className="footer__contact__Mailus">
          <h4>Mail Us</h4>
          <h5>acm@cec.edu.in</h5>
        </div>
      </div> */}
      <div className="footer__copyright">
        <div className="footer__copyright__text">
          <p>
            Designed and Developed by -{' '}
            <a href="https://github.com/parasdec2/" target="_blank">
              Paras Garg
            </a>{' '}
            @ CEC ACM Student Chapter
          </p>
          <div className="footer__copyright__social">
            <a href="https://www.instagram.com/acm_cec/" target="_blank">
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/acm-chapter-cec/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/acm_cec/" target="_blank">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
