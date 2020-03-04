import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";

const styles = {
  paper: {
    padding: 8
  },
  textField: {
    width: "100%"
  },
  button: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#008080",
    color: "#fff",
    "&:hover": {
      color: "#8b008b"
    }
  }
};

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const postData = {
      text: this.state.text
    };

    this.props.addPost(postData);
    this.setState({ text: "" });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <TextField
          className={classes.textField}
          multiline
          rowsMax="4"
          label="What's new?"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.handleSubmit}
        >
          Send
        </Button>
      </Paper>
    );
  }
}

export default connect(null, { addPost })(withStyles(styles)(AddPost));
