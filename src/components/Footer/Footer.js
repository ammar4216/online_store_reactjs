import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "3rem",
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Online Store &copy; 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
