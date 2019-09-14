import React from 'react';

function MediumItem(props) {
    const {item} = props;

    const displayContent = (content) => {
        const snippet = content.indexOf("medium-feed-snippet");
        const contentStartIndex = snippet + 21;
        const contentEndIndex = content.indexOf("<", contentStartIndex);
        const res = (snippet === -1 ? null : content.slice(contentStartIndex, contentEndIndex));

        return res;
    }

    const displayDate = (date) => {
        const months = [0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const year = date.split("-")[0];
        const month = date.split("-")[1];
        const day = date.split("-")[2].split(" ")[0];
        let res = months[Number(month)] + " " + day;

        if (new Date().getFullYear() !== Number(year)) {
            res += ", " + year;
        }

        return res;
    }

    return (
        <div className="post">
            <a href={item.link}> {/* add routing for links (enable back button) */}
                <h2 className="title">{item.title}</h2>
                <h3 className="content">{displayContent(item.content)}</h3>
                <p className="author">{item.author}</p>
                <p className="pubDate">{displayDate(item.pubDate)}</p>
            </a>
        </div>
    )
}

export default MediumItem;