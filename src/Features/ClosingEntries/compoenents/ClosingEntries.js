import React, { useState } from 'react';
import classes from './closingentries.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postClosing } from '../actions';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';

function ClosingEntrySheet() {
  const dispatch = useDispatch();
  const [message, setmessage] = useState('');

  const { loading } = useSelector((state) => {
    const { ClosingEntries } = state;
    return {
      ClosingEntries,
    };
  });

  const displayTableHandler = () => {
    dispatch(postClosing());
    if (!loading) {
      setmessage('Done! General Journal and Trial Balance is Updated..');
    }
  };

  return (
    <div>
      <div className={classes.header}>
        <p
          className=" bg-info
"
        >
          Closing
        </p>
      </div>
      {!loading && (
        <div>
          <p className="alert alert-warning">{message}</p>
        </div>
      )}
      <button
        onClick={displayTableHandler}
        className={`btn btn-primary ${classes.button}`}
      >
        {' '}
        Closing
      </button>
    </div>
  );
}

export default ClosingEntrySheet;
