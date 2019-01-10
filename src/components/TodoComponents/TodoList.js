import React from "react";
import "./Todo.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 20
  }
});

const TodoList = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <p
        className={props.todo.completed ? "line list" : "list"}
        onClick={e => props.handleCompleted(e, props.todo.id)}
      >
        {props.todo.task}
      </p>
    </Paper>
  );
};

export default withStyles(styles)(TodoList);
