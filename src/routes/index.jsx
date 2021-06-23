import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import ExerciseOne from "../pages/ExerciseOne";
import ExerciseTwo from "../pages/ExerciseTwo";
import ExerciseThree from "../pages/ExerciseThree";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/exerciseone">
        <ExerciseOne />
      </Route>
      <Route exact path="/exerciseone">
        <ExerciseOne />
      </Route>
      <Route exact path="/exercisetwo">
        <ExerciseTwo />
      </Route>
      <Route exact path="/exercisethree">
        <ExerciseThree />
      </Route>
    </Switch>
  );
};

export default Routes;
