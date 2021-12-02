import "./App.css";
import * as React from "react";
import ReactDOM from "react-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Draggable from "react-draggable";

function App() {
  var test = {
    img: "https://guide-images.cdn.ifixit.com/igi/3hZaEUfW2hoBbWcF.medium",
  };
  var test2 = {
    img: "https://guide-images.cdn.ifixit.com/igi/3hZaEUfW2hoBbWcF.medium",
  };
  var test3 = {
    img: "https://guide-images.cdn.ifixit.com/igi/3hZaEUfW2hoBbWcF.medium",
  };
  var itemData = [test, test2, test3];
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <ImageList
            sx={{ width: 1000, height: 1000 }}
            cols={3}
            rowHeight={164}
          >
            {itemData.map((item) => (
              <Draggable>
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              </Draggable>
            ))}
          </ImageList>
        </p>
      </header>
    </div>
  );
}

export default App;
