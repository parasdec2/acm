import { Button } from '@material-ui/core';
import React from 'react';
import joinUs from '../hiring.png';
import { heading } from '../utils';

const JoinUs = () => {
  React.useEffect(() => {
    document.title = 'ACM CEC | Join Us';
    heading(window.location.pathname);
  });
  return (
    <div style={{ margin: '5% 20% 0%', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Join Us Now</h1>
        <br />
        <br />
        <br />
        <img src={joinUs} alt="Join Us" style={{ width: '60%' }}></img>
      </div>
      <br />
      <br />
      <div style={{ fontSize: '1.1rem' }}>
        <p>
          Hi,
          <br />
          <br />
          ACM started in Chandigarh Engineering College in 2018 and as of 2021
          recruitment batch, we are a team of 34 members. We are trying to
          reinforce our club with brilliant minds like you so that we can expand
          our reach and bring out much better content and events for everyone :)
          <br />
          <br />
          This will be our 4th recruitment batch and a special one because it is
          the first one that we are doing in the COVID era. We welcome you to
          ACM and hope that we get to work together soon.
          <br />
          <br />
          As for what we do - We post content regarding tech, interesting facts,
          organize coding competitions, hackathons, workshop, seminars etc.
          <br />
          <br />
          Let's get to know you! Fill the google form in the link below and we
          will get back to you for your interview date :)
        </p>
      </div>
      <br />
      <div style={{ textAlign: 'center', paddingBottom: '100px' }}>
        <Button
          size="medium"
          color="secondary"
          variant="contained"
          id="googleform"
        >
          <a
            style={{ textDecoration: 'none', color: 'white' }}
            href="https://docs.google.com/forms/d/1TTOQ07pSh1PJmQQGp4ABRrtKY0zoGUzYpqsC_H66q68/edit"
            target="_blank"
          >
            Fill Form
          </a>
        </Button>
      </div>
    </div>
  );
};

export default JoinUs;
