import { Fragment } from 'react';

import HeaderButton from './HeaderButton';
import abcImage from '../../assets/abc.jpg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ABC Company</h1>
        <HeaderButton />
      </header>
      {
        <div className={classes['main-image']}>
          <img src={abcImage} />
        </div>
      }
    </Fragment>
  );
};

export default Header;
