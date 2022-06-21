import React, { useState } from 'react'
//import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState(" ");

    const handledInputChange = (e) => {
        // console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handledSubmit = (e) => {
        e.preventDefault();
        //console.log("Submit hecho...");
        const newInputValue = inputValue.trim();
        if (newInputValue.length < 1) return;

        if (newInputValue.length > 2) {
            // setCategories(catego => [...catego, inputValue]);
            onNewCategory(newInputValue);
            setinputValue('');
        }
    }
    return (
        <form onSubmit={handledSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handledInputChange}
            />

        </form>
    )
};

// AddCategory.propTypes = {
//     setCategories: PropTypes.func.isRequired
// };

