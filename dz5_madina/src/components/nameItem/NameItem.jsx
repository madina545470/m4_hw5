import React from 'react';

const NameItem = ({ name, onChange, isChangeDisabled }) => {
    return (
        <div className="nameItem" style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <span>{name}</span>
            <button onClick={onChange} disabled={isChangeDisabled}>
                Поменять
            </button>
        </div>
    );
};

export default NameItem;
