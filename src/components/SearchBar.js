import React, {useState, useEffect} from 'react';

function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("");
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);

    const handleInputChanges = (e) => {
        setSearchValue(e.target.value);
      }
    
    const resetInputField = () => {
        setSearchValue("")
    }

    // add feature -if search value is empty do not allow search
    const submitSearch = (e) => {
        e.preventDefault();
        props.search(searchValue);
        saveSearchHistory();
        resetInputField();
    }
    
    const saveSearchHistory = () => {
        if (history.length < 5) {
            setHistory([...history, searchValue]);
        } else {
            updateSearchHistory();
        }
    }

    // add feature - if name was searched already delete older search from history
    const updateSearchHistory = () => {
        const newHistory = history;
        newHistory.shift();
        setHistory([...newHistory, searchValue]);
    }

    // responsible for saving current history in browsers local storage every time a user is searched
    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
      },[history]);

    return (
        <div>
            <form>
                <div className="search">
                    <input
                        className="search-text"
                        type="text" 
                        placeholder="Search" 
                        value={searchValue}
                        onChange={handleInputChanges}
                        list="historyList"
                    />
                    <datalist id="historyList">
                        {history.map((item, key) =>
                            <option key={key} value={item} />
                        )}
                    </datalist>
                    <button className="submit-button" onClick={submitSearch}>Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;