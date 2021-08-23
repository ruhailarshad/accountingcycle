import classes from './HeaderButton.module.css';
import { HeaderButtons } from '../../Scripts/List';
import { BootstrapColClassHeader } from '../../Styles/BootstrapConstants';
import { Link } from 'react-router-dom';

const HeaderCartButton = props => {
  return (
    <ul className="my-3">
      {HeaderButtons.map(({displayName, to}) => (
        <li className={`${BootstrapColClassHeader} ${classes.button} btn btn-primary h-25`}>
          <Link to={to}>
            {displayName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderCartButton;
