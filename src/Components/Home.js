import React from 'react';
import { heading } from '../utils';
import './css/Home.css';
import logo from '../logo.svg';
import joinUs from '../Team.gif';
import MediaCard from './MediaCard';

function Home() {
  React.useEffect(() => {
    document.title = 'ACM CEC | Home';
    heading(window.location.pathname);
  });

  return (
    <div className="home content">
      <div style={{ textAlign: 'center' }}>
        <a href="/joinus">
          <img src={joinUs} alt="Join Us" style={{ width: '40%' }}></img>
        </a>
      </div>

      <div className="home__title">
        <div className="home__acm__image">
          <img width="300px" height="300px" src={logo} alt="ACM CEC" />
        </div>
        <div className="home__title__text">
          <center>
            <h1>Association For Computing Machinery Student Chapter</h1>
            <br />
            <h1>Chandigarh Engineering College</h1>
          </center>

          <p>
            Started in 2018, with just 3 members, we have come a long way since
            then. We are a members club and help people with technological
            awareness and career advice as well. We conduct various coding
            competitions, technical talks, webinars, seminars and placement
            competitions as well.
            <br />
            <br />
            We believe in creativity, free flow of thoughts and experimentation
            with the normal goings of the society. Welcome to our little world,
            where we try our best to provide quality content and events for the
            world out there.
          </p>
        </div>
      </div>
      <hr />
      <div className="home__part">
        <div className="home__part__card">
          <MediaCard title="Events" btnText="Go to Events" events />
        </div>
        <div className="home__part__card">
          <MediaCard title="Our Team" btnText="Meet Our team" team />
        </div>
        <div className="home__part__card">
          <MediaCard title="Reach Us" btnText="Feedback Form" reachUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
