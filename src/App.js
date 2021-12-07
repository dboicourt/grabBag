import "./App.css";
import * as React from "react";
import InfiniteScroll from "./Components/InfiniteScroll";
import DropZone from "./Components/DropZone";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div>
          <div>
            <p>GearBag</p>
          </div>
          <DropZone></DropZone>
          <InfiniteScroll></InfiniteScroll>
        </div>
      </body>
    </div>
  );
}

export default App;
