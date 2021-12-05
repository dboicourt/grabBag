import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";

class Product extends React.Component {
  render() {
    const productImg = this.props.product.image.thumbnail;
    const productKey = this.props.product.wikiid;
    const productName = this.props.product.title;

    return (
      <ImageListItem key={productKey}>
        <img
          src={`${productImg}`}
          srcSet={`${productImg}`}
          alt={productName}
          loading="lazy"
        />
      </ImageListItem>
    );
  }
}

export default Product;
