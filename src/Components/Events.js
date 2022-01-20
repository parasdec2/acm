import React from 'react';
import { heading } from '../utils';
import './css/Events.css';
import './css/card.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { db } from '../firebase';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  cardroot: {
    width: 'fitContent',
    height: 350,
    background: 'transparent',
  },
  media: {
    height: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
}));

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

function EventCard({ name, date, link, description, imageUrl, past }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} className="card__image__image" alt={name}></img>
      </div>
      <div className="card__content">
        <div className="card__content__text">
          <h2>{name}</h2>
        </div>
        <div className="card__content__desc" style={{ padding: '10px' }}>
          <p>{description}</p>
        </div>
        <div className="card__content__button">
          {!past && (
            <Button size="small" color="secondary" id={name}>
              Register
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function Events() {
  const [upcomingEvents, setUpcomingEvents] = React.useState([]);
  const [pastEvents, setPastEvents] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    document.title = 'ACM CEC | Events';
    heading(window.location.pathname);
    function firestoreData(name) {
      let nameRef = db.collection(name);
      let nameList = nameRef
        .get()
        .then((snapshot) => {
          const dataList1 = [];
          const dataList2 = [];
          var d1 = new Date();
          snapshot.forEach((doc) => {
            var d2 = new Date(doc.data().date.toDate());
            if (d2.getTime() >= d1.getTime()) dataList1.push(doc.data());
            else dataList2.push(doc.data());
          });
          setUpcomingEvents(dataList1);
          setPastEvents(dataList2);
          setLoaded(true);
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        });
    }
    firestoreData('events');
  }, []);

  const classes = useStyles();

  return (
    <div className="events content">
      <div className="events__heading">
        <h1>Our Events</h1>
      </div>
      <div className="events__category">
        <div className="events__category__col">
          <div className="events__category__type">
            <h3>Workshops</h3>
          </div>
          <div className="events__category__type">
            <h3>Expert Talks</h3>
          </div>
        </div>
        <div className="events__category__col">
          <div className="events__category__type">
            <h3>Hackathons</h3>
          </div>
          <div className="events__category__type">
            <h3>Fun Activities</h3>
          </div>
        </div>
      </div>

      <div className="r">
        <div className="events__upcoming__heading">
          <h2>Upcoming Events</h2>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.card}>
            {loaded ? (
              upcomingEvents.length > 0 ? (
                upcomingEvents.map(({ name, imageUrl, date, description }) => (
                  <Grid
                    item
                    xs={8}
                    sm={6}
                    md={5}
                    lg={4}
                    className={classes.card}
                  >
                    <EventCard
                      name={name}
                      imageUrl={imageUrl}
                      date={date}
                      description={description}
                    />
                  </Grid>
                ))
              ) : (
                <div className="no__upcoming__events">
                  <h3>No Upcoming Events! Stay tuned for upcoming events</h3>
                </div>
              )
            ) : (
              <Skelet />
            )}
          </Grid>
        </div>
      </div>
      <div className="events__past">
        <div className="events__past__heading">
          <h2>Past Events</h2>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.card}>
            {loaded ? (
              pastEvents.length > 0 ? (
                pastEvents.map(({ name, imageUrl, date }) => (
                  <Grid
                    item
                    xs={8}
                    sm={6}
                    md={5}
                    lg={4}
                    className={classes.card}
                  >
                    <EventCard
                      name={name}
                      imageUrl={imageUrl}
                      date={date}
                      past
                    />
                  </Grid>
                ))
              ) : (
                <div className="no__upcoming__events">
                  <h3>No Past events</h3>
                </div>
              )
            ) : (
              <Skelet />
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Events;
