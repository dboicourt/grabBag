import "./App.css";
import * as React from "react";
import InfiniteScroll from "./Components/InfiniteScroll";

function App() {
  return (
    <div className="App">
      <header className="App-header">TestLogo</header>
      <body className="App-body">
        <p>
          <InfiniteScroll></InfiniteScroll>
        </p>
      </body>
    </div>
  );
}

export default App;
