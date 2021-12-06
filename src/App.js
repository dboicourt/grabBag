import "./App.css";
import * as React from "react";
import InfiniteScroll from "./Components/InfiniteScroll";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <InfiniteScroll></InfiniteScroll>
        </p>
      </header>
    </div>
  );
}

export default App;
