import React, { useState } from 'react';

// Components
import FormModal from './Components/FormModal/index';
import GeneralEntries from './Components/GeneralEntries'



// Styles


const Form = props => {

  const [toggle, setToggle] = useState(true);

  // Modal Close Func
  const toggleModal = () => {
    setToggle(prev => !prev);
  };

  return (
    <div>
      {toggle && <FormModal onCloseModal={toggleModal} />}
      <GeneralEntries toggleModal={toggleModal} />
    </div>
  );
};

export default Form;
