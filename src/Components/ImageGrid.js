import * as React from "react";
import ReactDOM from "react-dom";
import ImageList from "@mui/material/ImageList";
import Draggable from "react-draggable";
import Product from "./Product";
import { ImageListItemBar } from "@mui/material";

class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://www.ifixit.com/api/2.0/wikis/CATEGORY?offset=0&limit=50")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message};</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ImageList sx={{ width: 1000, height: 1000 }} cols={3} rowHeight={164}>
          {items.map((item) => (
            <Draggable>
              <Product product={item}></Product>
            </Draggable>
          ))}
        </ImageList>
      );
    }
  }
}

export default ImageGrid;
