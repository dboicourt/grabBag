import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";

class Product extends React.Component {
  render() {
    return (
      <ImageListItem key={this.props.item.img}>
        <img
          src={`${this.props.item.img}`}
          srcSet={`${this.props.item.img}`}
          alt={this.props.item.title}
          loading="lazy"
        />
      </ImageListItem>
    );
  }
}

export default Product;
