import React, { useState } from 'react';
import NameInput from './components/nameInput/NameInput';
import NameList from './components/nameList/NameList';

const App = () => {
  const [nameInput, setNameInput] = useState('');
  const [names, setNames] = useState([]);

  const handleAddName = () => {
    if (nameInput.trim()) {
      setNames([...names, nameInput.trim()]);
      setNameInput('');
    }
  };

  const handleChangeName = (index, newName) => {
    const updatedNames = [...names];
    updatedNames[index] = newName;
    setNames(updatedNames);
  };

  return (
      <div>
        <h1>Список имен</h1>
        <NameInput
            nameInput={nameInput}
            setNameInput={setNameInput}
            handleAddName={handleAddName}
        />
        <NameList names={names} handleChangeName={handleChangeName} nameInput={nameInput} />
      </div>
  );
};

export default App;
