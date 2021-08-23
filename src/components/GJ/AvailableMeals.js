import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = props => {
  // const mealsList = meals.map(meal => (
  //   <MealItem
  //     key={meal.id}
  //     id={meal.id}
  //     name={meal.name}
  //     description={meal.description}
  //     price={meal.price}
  //   />
  // ));

  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          <li className={classes.meal}>
            <h2>Date</h2>
            <div>
              <h2>Entries</h2>
            </div>
            <h2>Debit</h2>
            <h2> Credit</h2>
          </li>

          <MealItem />

          <MealItem />
        </Card>
      </ul>
      <button className={classes.button} onClick={props.onClick}>
        Add Journal Entries
      </button>
    </section>
  );
};

export default AvailableMeals;
