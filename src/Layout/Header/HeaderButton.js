import classes from './HeaderButton.module.css';
import { HeaderButtons } from '../../Scripts/List';
import { BootstrapColClassHeader } from '../../Styles/BootstrapConstants';
import { Link } from 'react-router-dom';

const HeaderCartButton = (props) => {
  return (
    <ul className="navbar-nav">
      {HeaderButtons.map(({ displayName, to }) => (
        <li className=" nav-item ">
          <Link className={'nav-link'} to={to} key={to}>
            {displayName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderCartButton;
