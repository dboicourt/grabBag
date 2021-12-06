import * as React from "react";
import ImageList from "@mui/material/ImageList";
import Product from "./Product";

class ImageGrid extends React.Component {
  render() {
    return (
      <ImageList sx={{ width: 1000, height: 1000 }} cols={3} rowHeight={164}>
        {this.props.items.map((item) => (
          <Product product={item}></Product>
        ))}
      </ImageList>
    );
  }
}

export default ImageGrid;
