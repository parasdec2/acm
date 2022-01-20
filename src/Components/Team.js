import React, { useState } from 'react';
import { heading } from '../utils';
import './css/Team.css';
import './css/card.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { db } from '../firebase';
import { Link } from '@material-ui/core';
import team from '../data/team';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
}));

const linkedInUrl = {};

function TeamCard({ name, pic, linkedIn, role }) {
  if (!!linkedIn) {
    linkedInUrl[name] = linkedIn;
  }
  return (
    <div className="card">
      <div className="card__image">
        <img src={pic} className="card__image__image" alt={name}></img>
      </div>
      <div className="card__content">
        <div className="card__content__text">
          <h2>{name}</h2>
          <p>{role}</p>
        </div>
        <div className="card__content__button">
          {!!linkedIn && (
            <Link target="_blank" href={linkedInUrl[name]}>
              <Button size="large" color="secondary" id={name}>
                <LinkedIn />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function Skelet() {
  return (
    <Box>
      <Skeleton
        variant="rect"
        width={210}
        height={118}
        style={{ background: 'rgba(192,192,192,0.7)' }}
      />
      <Box pt={0.5}>
        <Skeleton style={{ background: 'rgba(192,192,192,0.7)' }} />
        <Skeleton width="60%" style={{ background: 'rgba(192,192,192,0.7)' }} />
      </Box>
    </Box>
  );
}

function Team() {
  const classes = useStyles();
  const [faculty, setFaculty] = useState([]);
  const [office, setOffice] = useState([]);
  const [technical, setTechnical] = useState([]);
  const [social, setSocial] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [research, setResearch] = useState([]);

  React.useEffect(() => {
    document.title = 'ACM CEC | Team';
    heading(window.location.pathname);

    // function firestoreData(name) {
    //   let nameRef = db.collection(name);
    //   let nameList = nameRef
    //     .get()
    //     .then((snapshot) => {
    //       const dataList = [];
    //       snapshot.forEach((doc) => {
    //         dataList.push(doc.data());
    //       });
    //       switch (name) {
    //         case 'faculty':
    //           setFaculty(dataList);
    //           break;
    //         case 'office':
    //           setOffice(dataList);
    //           break;
    //         case 'technical':
    //           setTechnical(dataList);
    //           break;
    //         case 'social':
    //           setSocial(dataList);
    //           break;
    //         case 'organization':
    //           setOrganization(dataList);
    //           break;
    //         case 'research':
    //           setResearch(dataList);
    //           break;
    //         default:
    //           break;
    //       }
    //     })
    //     .catch((error) => {
    //       console.log('Error getting documents: ', error);
    //     });
    // }
    // firestoreData('faculty');
    // firestoreData('office');
    // firestoreData('technical');
    // firestoreData('social');
    // firestoreData('organization');
    // firestoreData('research');
  }, []);

  return (
    <div className="team content">
      <div className="team__heading">
        <h1>Meet Our Team</h1>
      </div>
      <hr className="team__linebreak" />
      <div className="team__department__heading">
        <h1>Faculty Co-odinators</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.card}>
          {team.faculty.length > 0 ? (
            team.faculty.map(({ name, role, pic, linkedIn }) => (
              <Grid item xs={8} sm={6} md={5} lg={4} className={classes.card}>
                <TeamCard name={name} role={role} pic={pic} />
              </Grid>
            ))
          ) : (
            <Skelet />
          )}
        </Grid>
      </div>

      <hr className="team__linebreak" />
      <div className="team__department__heading">
        <h1>Office</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.card}>
          {team.office.length > 0 ? (
            team.office.map(({ name, role, pic, linkedIn }) => (
              <Grid item xs={8} sm={6} md={5} lg={4} className={classes.card}>
                <TeamCard
                  name={name}
                  role={role}
                  pic={pic}
                  linkedIn={linkedIn}
                />
              </Grid>
            ))
          ) : (
            <Skelet />
          )}
        </Grid>
      </div>

      <hr className="team__linebreak" />
      <div className="team__department__heading">
        <h1>Techical Team</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.card}>
          {team.technical.length > 0 ? (
            team.technical.map(({ name, role, pic, linkedIn }) => (
              <Grid item xs={8} sm={6} md={5} lg={4} className={classes.card}>
                <TeamCard
                  name={name}
                  role={role}
                  pic={pic}
                  linkedIn={linkedIn}
                />
              </Grid>
            ))
          ) : (
            <Skelet />
          )}
        </Grid>
      </div>

      <hr className="team__linebreak" />
      <div className="team__department__heading">
        <h1>Social Media Management Team</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.card}>
          {team.social.length > 0 ? (
            team.social.map(({ name, role, pic, linkedIn }) => (
              <Grid item xs={8} sm={6} md={5} lg={4} className={classes.card}>
                <TeamCard
                  name={name}
                  role={role}
                  pic={pic}
                  linkedIn={linkedIn}
                />
              </Grid>
            ))
          ) : (
            <Skelet />
          )}
        </Grid>
      </div>

      <hr className="team__linebreak" />
      <div className="team__department__heading">
        <h1>Organizing Team</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.card}>
          {team.organization.length > 0 ? (
            team.organization.map(({ name, role, pic, linkedIn }) => (
              <Grid item xs={8} sm={6} md={5} lg={4} className={classes.card}>
                <TeamCard
                  name={name}
                  role={role}
                  pic={pic}
                  linkedIn={linkedIn}
                />
              </Grid>
            ))
          ) : (
            <Skelet />
          )}
        </Grid>
      </div>

      <hr className="team__linebreak" />
      <div className="team__department__heading">
        <h1>Research Team</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.card}>
          {team.research.length > 0 ? (
            team.research.map(({ name, role, pic, linkedIn }) => (
              <Grid item xs={8} sm={6} md={5} lg={4} className={classes.card}>
                <TeamCard
                  name={name}
                  role={role}
                  pic={pic}
                  linkedIn={linkedIn}
                />
              </Grid>
            ))
          ) : (
            <Skelet />
          )}
        </Grid>
      </div>
      <hr className="team__linebreak" />
    </div>
  );
}

export default Team;
