import React, { useState } from 'react';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import classes from './Form.module.css';
const Form = props => {
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
  const removeClickHandler = val => {
    const list = [...debitVal];
    if (val === 'd') {
      const length = debitVal.length - 1;
      if (length !== 0) {
        list.splice(length, 1);
        setDebitVal(list);
      } else {
        const length = creditVal.length - 1;
        if (length !== 0) {
          list.splice(length, 1);
          setCreditVal(list);
        }
      }
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
  console.log(debitVal);

  // handle click event of the Add button

  const inputFunction = (inputArr, Info, Name, Type, fn) => {
    return inputArr.map((arr, i) => (
      <div className={classes.form}>
        <div>
          <div>
            <label>{Info}: </label>
            <input
              type="text"
              id={Info}
              onChange={e => fn(e, i)}
              value={arr.debitInfo}
              name={Info === 'Debit Info' ? 'debitInfo' : 'creditInfo'}
            />
          </div>
        </div>
        <div>
          <div>
            <label>{Name}: </label>
            <input
              type="text"
              id={Name}
              onChange={e => fn(e, i)}
              value={arr.debit}
              name={Name === 'Debit' ? 'debit' : 'credit'}
            />
          </div>
        </div>
        <div>
          <label>{Type}: </label>
          <select
            id="TypeA"
            onChange={e => fn(e, i)}
            value={arr.typeA}
            name={Type === 'Type A' ? 'typeA' : 'typeB'}
          >
            <option value="Asset">Asset</option>
            <option value="Liability">Liability</option>
            <option value="Owner Equity">Owner Equity</option>
            <option value="Revenue">Revenue</option>
            <option value="Expense">Expense</option>
          </select>
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

  return (
    <Card>
      <Modal onClose={props.onClose}>
        <form className={classes.overallform}>
          {debitInput}
          {creditInput}
        </form>
        <br />
        <div className={classes.addmore}>
          <div>
            <label>Add Debit Entry </label>
            <button
              className={classes.button}
              onClick={() => addClickHandler('d')}
            >
              +
            </button>
            <button
              className={classes.button}
              onClick={() => removeClickHandler('d')}
            >
              -
            </button>
          </div>

          <div>
            <label>Add Debit Entry </label>
            <button
              className={classes.button}
              onClick={() => addClickHandler('c')}
            >
              +
            </button>
            <button
              className={classes.button}
              onClick={() => removeClickHandler('c')}
            >
              -
            </button>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default Form;
