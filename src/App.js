import './App.css';
import { useState } from 'react';
import JournalList from './components/GJ/JournalList';
import Form from './components/GJ/Form';
import Header from './components/Layout/Header';
function App() {
  const [showForm, setshowForm] = useState(false);
  const showFormHandler = () => {
    setshowForm(true);
  };
  const hideFormHandler = () => {
    setshowForm(false);
  };
  return (
    <div className="App">
      {showForm && <Form onClose={hideFormHandler} />}
      <Header />
      <JournalList onClick={showFormHandler} />
    </div>
  );
}

export default App;
