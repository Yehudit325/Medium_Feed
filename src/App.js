import React, {useState} from 'react';

import SearchBar from "./SearchBar"
import MediumItem from "./MediumItem"
// import Feed from "./Feed"

// import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
    // add error handling

  const search = query => {
    const url =
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40${query}`;
    // `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fthe-atlantic`

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
