import React, { useState, useEffect } from "react";
import axios from "axios";

function TopApp() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    //get the data form the api via axios
    axios
      .get("https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json")
      .then((res) => {
        console.log(res.data.feed.entry);
        setAppData(res.data.feed.entry);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Top 100 free apps</h2>
      {appData.map((element, index) => (
        <div>
          <div className="container" key={index}>
            <p className="numbering">{index + 1}</p>

            {index % 2 === 0 && (
              <img
                className="imageLook2"
                src={element["im:image"][2].label}
                alt="icon"
              />
            )}

            {index % 2 !== 0 && (
              <img
                className="imageLook"
                src={element["im:image"][2].label}
                alt="icon"
              />
            )}

            <div className="content">
              {element["im:name"].label}
              <p className="category"> {element.category.attributes.label}</p>
            </div>

          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TopApp;
