import { Fragment } from 'react';

import HeaderButton from './HeaderButton';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ backgroundColor: '#e3f2fd' }}
        >
          <Link className="navbar-brand" to="/">
            <h3>ABC Company</h3>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <HeaderButton />
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
