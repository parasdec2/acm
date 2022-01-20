import Divider from '@material-ui/core/Divider';
import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './css/ContactUs.css';
import { heading } from '../utils';

function ContactUs() {
  React.useEffect(() => {
    document.title = 'ACM CEC | Contact Us';
    heading(window.location.pathname);
  });

  return (
    <div className="contact">
      <center>
        <div className="contact__heading">
          <h1>Reach Us</h1>
        </div>
        <Divider style={{ marginTop: '10px', fontSize: 'larger' }} />
        <div className="contact__location">
          {/* <h2 className="contact__location__heading">Reach Us</h2> */}
          <div className="contact__location__block">
            <div className="contact__location__address__block">
              <div className="contact__location__address">
                <address>
                  Chandigarh Engineering College,
                  <br />
                  <br />
                  Willson Block (Block-3),
                  <br />
                  <br />
                  Chandigarh Group of Colleges
                  <br />
                  <br />
                  Landran, Kharar-Banur Highway,
                  <br />
                  <br />
                  Sector 112, Greater Mohali,
                  <br />
                  <br />
                  Punjab 140307 (INDIA)
                  <br />
                  <br />
                  {/* <PhoneIcon />: +91 76961 05002
                  <br /> */}
                  <EmailIcon />:{' '}
                  <a href="mailto:acm.148882@gmail.com">acm.148882@gmail.com</a>
                </address>
              </div>
            </div>
            <div className="contact__location__map">
              <iframe
                width="100%"
                height="100%"
                class="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                // className="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.358382683108!2d76.663461!3d30.685234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65ef2d487904b8f3!2sChandigarh%20Engineering%20College-Block%203%2C%20Wilson%20Block!5e0!3m2!1sen!2sus!4v1614437465176!5m2!1sen!2sus"
              ></iframe>
            </div>
            <div className="contact__location__map__sm">
              <iframe
                title="Chandigarh Engineering College"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.358382683108!2d76.663461!3d30.685234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65ef2d487904b8f3!2sChandigarh%20Engineering%20College-Block%203%2C%20Wilson%20Block!5e0!3m2!1sen!2sus!4v1614437465176!5m2!1sen!2sus"
                // width="200"
                height="200"
                style={{
                  border: 'none',
                  // overflow: "hidden",
                  filter: 'hue-rotate(180deg)',
                  marginBottom: '40px',
                }}
                width="100%"
                // height="100%"
                class="absolute inset-0"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default ContactUs;
