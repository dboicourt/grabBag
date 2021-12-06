import * as React from "react";
import axios from "axios";
import ImageGrid from "./ImageGrid";

class InfiniteScroll extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: false,
      offset: 0,
      prevY: 0,
    };
  }

  getItems(last) {
    this.setState({ loading: true });
    axios
      .get(
        `https://www.ifixit.com/api/2.0/wikis/CATEGORY?offset=${last}&limit=50`
      )
      .then((res) => {
        this.setState({ items: [...this.state.items, ...res.data] });
        this.setState({ loading: false });
      });
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY) {
      const lastItem = this.state.items.length - 1;
      this.getItems(lastItem);
      this.setState({ offset: lastItem });
    }
    this.setState({ prevY: y });
  }

  componentDidMount() {
    this.getItems(this.state.offset);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  render() {
    const loadingCSS = { height: "100px", margin: "30px" };
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

    return (
      <div>
        <div>
          <ImageGrid items={this.state.items}></ImageGrid>
        </div>
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default InfiniteScroll;
