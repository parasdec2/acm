import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import event from '../events.svg';
import teamPic from '../team.svg';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 300,
    minHeight: 395,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(5px)',
    color: 'white',
  },
  media: {
    height: 240,
  },
});

export default function MediaCard({ title, btnText, reachUs, events, team }) {
  const classes = useStyles();
  const history = useHistory();

  const goToPage = () => {
    if (title === 'Events') history.push('/events');
    if (title === 'Our Team') history.push('/team');
    if (title === 'Reach Us') history.push('/contactus');
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {!reachUs ? (
          <CardMedia
            className={classes.media}
            image={events ? event : teamPic}
            title={title}
            onClick={goToPage}
          />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.358382683108!2d76.663461!3d30.685234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65ef2d487904b8f3!2sChandigarh%20Engineering%20College-Block%203%2C%20Wilson%20Block!5e0!3m2!1sen!2sus!4v1614437465176!5m2!1sen!2sus"
            width="300"
            height="240"
            style={{
              border: 'none',
              overflow: 'hidden',
              filter: 'hue-rotate(180deg)',
            }}
            allowFullScreen=""
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="Chandigarh Engineering College"
          ></iframe>
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="home__card__text"
          >
            {title}
          </Typography>
          {/* <Typography
            variant="body2"
            component="p"
            className="home__card__text"
          >
            {events
              ? 'See a glimpse of all the events that we conducted in the last tenure and in the COVID era.'
              : ''}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <center> */}
      <CardActions>
        <Button
          size="large"
          color="secondary"
          onClick={goToPage}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          {btnText}
        </Button>
      </CardActions>
      {/* </center> */}
    </Card>
  );
}
