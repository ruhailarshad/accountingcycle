import classes from './HeaderButton.module.css';

const HeaderCartButton = props => {
  return (
    <ul>
      <li className={classes.button}>
        <span>Trial Balance</span>
      </li>
      <li className={classes.button}>
        <span>Closing Entries</span>
      </li>
      <li className={classes.button}>
        <span>Financial Statement</span>
      </li>
      <li className={classes.button}>
        <span>Post Closing Entries</span>
      </li>
    </ul>
  );
};

export default HeaderCartButton;
