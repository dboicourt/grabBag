import * as React from "react";
import ReactDOM from "react-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Draggable from "react-draggable";
import Product from "./Product";
import { ImageListItemBar } from "@mui/material";

class ImageGrid extends React.Component {
  render() {
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
      <ImageList sx={{ width: 1000, height: 1000 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <Draggable>
            <Product item={test}></Product>
          </Draggable>
        ))}
      </ImageList>
    );
  }
}

export default ImageGrid;
