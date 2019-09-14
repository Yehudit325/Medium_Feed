import React, {useState} from 'react';

import SearchBar from "./components/SearchBar"
import MediumItem from "./components/MediumItem"

import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
    // add error handling

  // Search function to send to search bar
  const search = query => {
    if (!query.includes("-")) {
      query = "%40" + query;
    }
    const url =
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setPosts(data.items.filter(item => (!item.title.startsWith("Response")
                                                     && !item.title.startsWith("Thank")))))
  };

  return (
    <div>
      <SearchBar search={search}/>
      <div className="post-container">
        {posts.map(item =>(
            <MediumItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
