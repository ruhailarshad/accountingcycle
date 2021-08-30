/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../../../components/UI/LoadingSpinner';
import { getGeneralJournalList } from '../../actions';
import classes from './generalentries.module.css';

function GeneralEntries({ toggleModal }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneralJournalList());
  }, []);

  // eslint-disable-next-line no-unused-vars
  const {
    generalJournal: { generalJounralEntries, loading },
  } = useSelector((state) => {
    const { generalJournal } = state;
    return {
      generalJournal,
    };
  });

  const renderGeneralEnrties = () => {
    return generalJounralEntries.map((arr, index) => {
      const color = index % 2 === 0 ? 'grey' : '';

      return arr.map((arr1, i) => {
        const checker = arr1.creditAmount !== 0 ? 'shift' : 'stay';

        return (
          <tr className={classes[color]}>
            {i === 0 ? <td>{arr1?.Date?.split('T')[0]}</td> : <td></td>}

            <td className={classes[checker]}>{`${arr1.accountName} ${
              arr1.isClosingEntry ? 'Closing' : ''
            }`}</td>

            {arr1.debitAmount !== 0 ? <td>{arr1.debitAmount}</td> : <td></td>}

            {arr1.creditAmount !== 0 ? <td>{arr1.creditAmount}</td> : <td></td>}
          </tr>
        );
      });
    });
  };

  return (
    <div className="container mx-5 mt-5 h-75">
      <div className="row">
        <div
          style={{ height: '100px', color: 'white' }}
          className="general-entries-header col-12"
        >
          <div
            style={{ height: '75%', borderBottom: '1px solid white' }}
            className="bg-info"
          >
            <div className="row mt-4">
              <div className="col-lg-4 d-flex justify-content-start">
                <h3 className="mt-3 mx-2" style={{ color: 'white' }}>
                  General Entries
                </h3>
              </div>
              <div className="col-lg-8 d-flex justify-content-end">
                <button
                  style={{ height: '40px' }}
                  className={`btn btn-primary mx-2 mt-3 ${classes['entry-button']}`}
                  onClick={toggleModal}
                >
                  Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.tableani}>
          <div className="col-12">
            <table className="table  table-bordered table-hover">
              {!loading && (
                <thead className={classes.thead}>
                  <tr>
                    <td>Date</td>
                    <td>Account Name</td>

                    <td>Debit Amount</td>
                    <td>Credit Amount</td>
                  </tr>
                </thead>
              )}
              <tbody>
                {loading && <LoadingSpinner />}
                {!loading && renderGeneralEnrties()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralEntries;
