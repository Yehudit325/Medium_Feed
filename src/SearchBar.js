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
    /*
    1. add values to history array state
    2. save in local storage
    3. retreive from local storage
    4. print histiry in console
    5. limit to 5 objects in array
    6. print history from search bar
    */
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
                />
                <button onClick={submitSearch}>Search</button>
            </form>
            <p>{history}</p>
        </div>
        

    );
}

export default SearchBar;