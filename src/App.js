import React, {useState} from 'react';

import SearchBar from "./components/SearchBar"
import MediumItem from "./components/MediumItem"

import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
    // add error handling

    //add routing for links (enable back button)

  const search = query => {
    if (!query.includes("-")) {
      query = "%40" + query;
    }
    const url =
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setPosts(data.items.filter(item => (!item.title.startsWith("Response")
                                                     && !item.title.startsWith("Thanks")))))
    
  };

  return (
    <div>
      <SearchBar search={search}/>
      {posts.map(item =>(
            <MediumItem key={item.title} item={item} />
        ))}
    </div>
  );
}

export default App;
