import { Fragment } from "react";

import MealsSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeal />
    </Fragment>
  );
};
export default Meals;
