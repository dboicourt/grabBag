import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";

class Product extends React.Component {
  render() {
    const productImg = this.props.product.image;
    const productKey = this.props.product.id;
    const productName = this.props.product.title;

    return (
      <ImageListItem key={productKey}>
        <img
          src={`${productImg}?w=300&h=300&fit=crop&auto=format`}
          srcSet={`${productImg}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
          alt={productName}
          loading="lazy"
        />
      </ImageListItem>
    );
  }
}

export default Product;
