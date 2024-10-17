import React from 'react';
import NameItem from '../nameItem/NameItem';

const NameList = ({ names, handleChangeName, nameInput }) => {
    return (
        <div id="nameList" style={{ marginTop: '20px' }}>
            {names.length === 0 ? (
                <div>Список пуст</div>
            ) : (
                names.map((name, index) => (
                    <NameItem
                        key={index}
                        name={name}
                        onChange={() => handleChangeName(index, nameInput)}
                        isChangeDisabled={!nameInput.trim()}
                    />
                ))
            )}
        </div>
    );
};

export default NameList;
