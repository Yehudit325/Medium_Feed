import React, { useState } from 'react';

function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChanges = (e) => {
        setSearchValue(e.target.value);
      }
    
    const resetInputField = () => {
        setSearchValue("")
    }

    const submitSearch = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input
                type="text" 
                placeholder="Search" 
                value={searchValue}
                onChange={handleInputChanges}
            />
            <button onClick={submitSearch}>Search</button>
        </form>
    );
}

export default SearchBar;