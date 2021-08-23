

import classes from './JournalItems.module.css';

const JournalItems = props => {
  return (
    <li className={classes.gj}>
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

export default JournalItems;
