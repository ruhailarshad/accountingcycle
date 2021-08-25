import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions
import { setFormModalActiveStatus } from './actions';

// Components
import FormModal from './Components/FormModal/index';
import GeneralEntries from './Components/GeneralEntries';

// Styles


const GeneralEntriesContainer = props => {
  const dispatch = useDispatch();
  const { generalJournal: { isFormModalActive } } = useSelector((state) => {
    const {generalJournal} = state;
    return {
      generalJournal,
    }
  })

  // Modal Close Func
  const toggleModal = () => {
    dispatch(setFormModalActiveStatus(!isFormModalActive));
  };

  return (
    <div>
      {isFormModalActive && <FormModal onCloseModal={toggleModal} />}
      <GeneralEntries toggleModal={toggleModal} />
    </div>
  );
};

export default GeneralEntriesContainer;
