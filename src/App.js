import "./App.css";
import * as React from "react";
import ReactDOM from "react-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Draggable from "react-draggable";
import { ImageListItemBar } from "@mui/material";
import ImageGrid from "./Components/ImageGrid";

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
          <ImageGrid products={itemData}></ImageGrid>
        </p>
      </header>
    </div>
  );
}

export default App;
