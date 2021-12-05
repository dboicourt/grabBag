import * as React from "react";
import ReactDOM from "react-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Draggable from "react-draggable";
import Product from "./Product";
import { ImageListItemBar } from "@mui/material";

class ImageGrid extends React.Component {
  render() {
    return (
      <ImageList sx={{ width: 1000, height: 1000 }} cols={3} rowHeight={164}>
        {this.props.products.map((item) => (
          <Draggable>
            <Product item={item}></Product>
          </Draggable>
        ))}
      </ImageList>
    );
  }
}

export default ImageGrid;
