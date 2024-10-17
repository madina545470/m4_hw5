import React from 'react';

const NameInput = ({ nameInput, setNameInput, handleAddName }) => {
    return (
        <div>
            <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Введите имя"
            />
            <button onClick={handleAddName} disabled={!nameInput.trim()}>
                Добавить
            </button>
        </div>
    );
};

export default NameInput;
