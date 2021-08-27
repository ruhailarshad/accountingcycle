import classes from './HeaderButton.module.css';
import { HeaderButtons } from '../../Scripts/List';
import { BootstrapColClassHeader } from '../../Styles/BootstrapConstants';
import { Link } from 'react-router-dom';

const HeaderCartButton = props => {
  return (
    <ul className="my-3">
      {HeaderButtons.map(({displayName, to}) => (
          <Link to={to} key={to}>
            <li className={`${BootstrapColClassHeader} ${classes.button} btn btn-primary h-25 w-100`}>
            {displayName}
            </li>
          </Link>
      ))}
    </ul>
  );
};

export default HeaderCartButton;
