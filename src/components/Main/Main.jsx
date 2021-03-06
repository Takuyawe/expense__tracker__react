import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" align="center" />
      <CardContent>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
