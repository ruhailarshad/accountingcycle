/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import classes from './Form.module.css';
import Modal from '../../../../components/UI/Modal'
import {useDispatch, useSelector} from 'react-redux';
import { postGeneralEntry } from '../../actions';

function FormModal({ onCloseModal, toggle }) {
  const dispatch = useDispatch();
  const {generalJournal: { isPostingGeneralEntry }} = useSelector((state) => ({
    generalJournal: state.generalJournal,
  }));

  const [debitVal, setDebitVal] = useState([
    {
      debitInfo: '',
      debit: '',
      typeA: '',
    },
  ]);

  const [creditVal, setCreditVal] = useState([
    {
      creditInfo: '',
      credit: '',
      typeB: '',
    },
  ]);
  const [error,setError]=useState('');

  const debitInfoChangeHandler = (e, i) => {
    
    const { name, value } = e.target;
    const list = [...debitVal];
    list[i][name] = value;
    setDebitVal(list);
  };

  const creditInfoChangeHandler = (e, i) => {
    const { name, value } = e.target;
    const list = [...creditVal];
    list[i][name] = value;
    setCreditVal(list);
  };

  const removeClickHandler = (val, index) => {
    if (val === 'd') {
      const list = [...debitVal];
      list.splice(index, 1);
      setDebitVal(list);
    }
    else {
      const list = [...creditVal];
      list.splice(index, 1);
      setCreditVal(list);
    }
  };

  const addClickHandler = val => {
    if (val === 'd') {
      setDebitVal([
        ...debitVal,
        {
          debitInfo: '',
          debit: '',
          typeA: '',
        },
      ]);
    } else {
      setCreditVal([
        ...creditVal,
        {
          creditInfo: '',
          credit: '',
          typeB: '',
        },
      ]);
    }
  };

  // handle click event of the Add button

  const inputFunction = (inputArr, Info, Name, Type, fn) => {
    return inputArr.map((arr, i) => (
      <div className={classes.form}>
        <div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> {Info}: </span>
            <input type="text" class="form-control" placeholder="Account Name" aria-label="Username" aria-describedby="basic-addon1" id={Info}
              onChange={e => fn(e, i)}
              value={Info === 'Debit Info' ? arr.debitInfo : arr.creditInfo}
              name={Info === 'Debit Info' ? 'debitInfo' : 'creditInfo'} />
          </div>
        </div>
        <div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> {Name} Amount : </span>
            <input type="number" class="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1"
              id={Name}
              onChange={e => fn(e, i)}
              value={Info === 'Debit Info' ? arr.debit : arr.credit}
              name={Name === 'Debit' ? 'debit' : 'credit'} />
          </div>
        </div>
        <div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> {Type} </span>
            <select
              class="form-control"
              id="TypeA"
              onChange={e => fn(e, i)}
              value={Info === 'Debit Info' ? arr.typeA : arr.typeB}
              name={Type === 'Type A' ? 'typeA' : 'typeB'}
            >
              <option value="">Select Type</option>
              <option value="Asset">Asset</option>
              <option value="Liability">Liability</option>
              <option value="Owner Equity">Owner Equity</option>
              <option value="Revenue">Revenue</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
        </div>
        <div>
          <button disabled={i===0} className="btn btn-primary"
            onClick={(e) => { Name === 'Debit' ? removeClickHandler('d', i) : removeClickHandler('c', i) }}
          >
            -
          </button>
        </div>
      </div>
    ));
  };
  const debitInput = inputFunction(
    debitVal,
    'Debit Info',
    'Debit',
    'Type A',
    debitInfoChangeHandler
  );
  const creditInput = inputFunction(
    creditVal,
    'Credit Info',
    'Credit',
    'Type B',
    creditInfoChangeHandler
  );


  const postGeneralEntryHandler = () => {
 
    const debitValue=debitVal.reduce((acc,{debit})=>acc+ +debit,0);
     const creditValue=creditVal.reduce((acc,{credit})=>acc+ +credit,0);

    if(debitValue===creditValue){
    const entriesToPost = [...debitVal.map(debitEntry => debitEntry), ...creditVal.map(creditEntry => creditEntry)];
    dispatch(postGeneralEntry(entriesToPost));
    }else{
      setError('Debit and Credit value should be equal');
    }
  }

  return (
    <Modal onClose={onCloseModal} isModalActive={toggle}>
      <form className={classes.overallform}>
        {debitInput}
        {creditInput}
      </form>
      <br />
      <div className={`${classes.addmore} row`}>
        <div className="col-lg-4">
          <div className="row mx-1">
            <div className="col-lg-6 ml-1">
              <label>Add Debit Entry </label>
            </div>
            <div className="col-lg-6">
              <button
                className={`mr-2 btn btn-primary w-50`}
                onClick={() => addClickHandler('d')}
              >
                +
            </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mr-3">
          <div className="row">
            <div className="col-lg-6">
              <label>Add Credit Entry </label>
            </div>
            <div className="col-lg-6">
              <button
                className={`mr-2 btn btn-primary w-50`}
                onClick={() => addClickHandler('c')}
              >
                +
            </button>
            </div>
          </div>
        </div>
        <div className={`row ${classes['submit-error']}`}>
          <div className="col-lg-8" />
          <div className="col-lg-4">
           
              <p className="alert alert-warning" hidden={!error}>{error}</p>
            <button type="submit" className={`btn btn-primary ${classes['submit-button']}`} onClick={postGeneralEntryHandler} disabled={isPostingGeneralEntry}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default FormModal
