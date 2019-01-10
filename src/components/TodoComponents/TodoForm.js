import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});
const TodoForm = props => {
  const { classes } = props;

  return (
    <form onSubmit={props.addTodo}>
      <TextField
        id="standard-name"
        label="Enter Todo"
        className={classes.textField}
        value={props.newTodo}
        onChange={props.handleChange}
        margin="normal"
        name="newTodo"
      />
      <Button
        onClick={props.addTodo}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Add Todo
      </Button>
      <Button
        onClick={props.clearTodos}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Clear Completed
      </Button>
    </form>
  );
};

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(TodoForm);
