import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGeneralJournal } from '../../actions';

function GeneralEntries({toggleModal}) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGeneralJournal());
    }, []);
    return (
        <div className="container mx-5 mt-5 h-75">
            <div className="row">
                <div style={{ height: '100px', color: 'white' }} className="general-entries-header col-12">
                    <div style={{ height: '75%',  borderBottom: '1px solid white', }} className="bg-dark">
                        <div className="row mt-4">
                            <div className="col-lg-4 d-flex justify-content-start">
                                <h3 className="mt-3 mx-2" style={{ color: 'white' }}>
                                    General Entries
                            </h3>
                            </div>
                            <div className="col-lg-8 d-flex justify-content-end">
                                <button style={{height: '40px'}} className="btn btn-primary mx-2 mt-3" onClick={toggleModal}>
                                    Add Entry
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <td>S No</td>
                                <td>Account</td>
                                <td>Debit Amount</td>
                                <td>Credit Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GeneralEntries;
