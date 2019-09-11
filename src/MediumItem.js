import React from 'react';

function MediumItem(props) {
    const {item} = props;
    const contentStartIndex = item.content.indexOf("medium-feed-snippet") + 21;
    const contentEndIndex = item.content.indexOf("</p>", contentStartIndex);
    const content = item.content.slice(contentStartIndex, contentEndIndex);

    return (
        <div key={item.id} className="post">
            <a href={item.link}>
                <h2 className="title">{item.title}</h2>
                <h4 className="content">{content}</h4>
                <p className="author">{item.author}</p>
                <p className="pubDate">{item.pubDate}</p>
            </a>
        </div>
    )
}

export default MediumItem;