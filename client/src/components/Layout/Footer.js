import React from "react";
import MadeWithLove from "react-made-with-love";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    textAlign: "center",
    marginTop: 20
  }
};

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <MadeWithLove
        by="Askat"
        link="https://github.com/Askat08"
        emoji={{
          using: "💻",
          verb: "made"
        }}
      />
    </div>
  );
};

export default withStyles(styles)(Footer);
