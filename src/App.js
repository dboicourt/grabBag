import "./App.css";
import * as React from "react";
import ReactDOM from "react-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Draggable from "react-draggable";
import { ImageListItemBar } from "@mui/material";
import ImageGrid from "./Components/ImageGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <ImageGrid></ImageGrid>
        </p>
      </header>
    </div>
  );
}

export default App;
