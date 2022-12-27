import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ( {onNewCategorie} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1 ) return;
        onNewCategorie(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type="text"
                placeholder="search gifs"
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategorie: PropTypes.func.isRequired,
}