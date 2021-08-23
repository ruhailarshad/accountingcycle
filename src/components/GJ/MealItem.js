import { useContext } from 'react';

import classes from './MealItem.module.css';

const MealItem = props => {
  return (
    <li className={classes.meal}>
      <h4>DATE</h4>
      <div>
        <h4>Debit Info</h4>
        <h4>Credit Info</h4>
      </div>
      <h4>Debit</h4>
      <h4> Credit</h4>
    </li>
  );
};

export default MealItem;
