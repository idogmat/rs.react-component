import React from "react";
import { IProduct } from "../../api/types";
import s from "./products.module.scss";
export class Product extends React.Component<IProduct, unknown> {
  render() {
    const { title, description, image, price } = this.props;
    return (
      <div className={s.main}>
        <div className={s.imgBlock}>
          <img className={s.img} src={image} alt="Sample Image" height="150" />
        </div>
        <div className="col-md-8 product-detail">
          <h4>{title}</h4>
          <p>{description}</p>
          <div>${price}</div>
        </div>
      </div>
    );
  }
}
