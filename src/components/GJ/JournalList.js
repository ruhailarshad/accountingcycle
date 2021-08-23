

import Card from '../UI/Card';
import JournalItems from './JournalItems';
import classes from './JournalList.module.css';

const JournalList = props => {


  return (
    <section className={classes.gjl}>
      <ul>
        <Card>
          <li className={classes.gj}>
            <h2>Date</h2>
            <div>
              <h2>Entries</h2>
            </div>
            <h2>Debit</h2>
            <h2> Credit</h2>
          </li>

          <JournalItems />

          <JournalItems />
        </Card>
      </ul>
      <button className={classes.button} onClick={props.onClick}>
        Add Journal Entries
      </button>
    </section>
  );
};

export default JournalList;
