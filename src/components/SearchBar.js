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

    const submitSearch = (e) => {
        e.preventDefault();
        props.search(searchValue);
        saveHistory();
        resetInputField();
    }
    
    const saveHistory = () => {
        if (history.length < 5) {
            setHistory([...history, searchValue]);
        } else {
            updateHistory();
        }
    }

    useEffect(() => {
        console.log(history);
        localStorage.setItem("history", JSON.stringify(history));
      },[history]);


    // add feature - if name was searched already delete older search from history
    const updateHistory = () => {
        const newHistory = history;
        newHistory.shift();
        setHistory([...newHistory, searchValue]);
    }

    return (
        <div>
            <form className="search">
                <input
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
                <button onClick={submitSearch}>Search</button>
            </form>
        </div>
        

    );
}

export default SearchBar;