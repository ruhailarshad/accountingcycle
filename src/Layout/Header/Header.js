import { Fragment } from 'react';

import HeaderButton from './HeaderButton';
import classes from './Header.module.css';
import {Link} from 'react-router-dom'; 

const Header = props => {
  return (
    <Fragment>
      <header className={"container-fluid bg-black " + classes.header}>
        <div className="row">
          <div className={`${classes['header-logo']} col-lg-2 my-4 text-primary`}>
            <Link to="/">
              <h3>ABC Company</h3>
            </Link>
          </div>
          <div className="col-lg-10 h-25">
            <HeaderButton />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
