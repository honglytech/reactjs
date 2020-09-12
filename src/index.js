import React from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import faker from "faker";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

const Faker = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={faker.image.image()}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {faker.finance.accountName()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {faker.finance.currencySymbol()}
              {faker.finance.amount()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
        }}
      >
        <form>
          <TextField
            label="First name"
            variant="outlined"
            placeholder={faker.name.firstName()}
          />
          <TextField
            label="Last name"
            variant="outlined"
            placeholder={faker.name.lastName()}
          />
          <TextField
            label="Job title"
            variant="outlined"
            placeholder={faker.name.jobTitle()}
          />
          <TextField
            label="Street address"
            variant="outlined"
            placeholder={faker.address.streetAddress()}
          />
          <TextField
            label="Country"
            variant="outlined"
            placeholder={faker.address.country()}
          />
          <br />
          <br />
          <TextField
            label="Phone number"
            variant="outlined"
            placeholder={faker.phone.phoneNumber()}
          />
          <TextField
            label="Email"
            variant="outlined"
            placeholder={faker.internet.email()}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={() => {}}>
            Submit
          </Button>
          <br />
        </form>
      </div> */}
    </>
  );
};

render(<Faker />, document.querySelector("#root"));
