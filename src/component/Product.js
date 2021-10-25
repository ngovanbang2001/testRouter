import React from "react";
import ProductItem from "./ProductItem";
import DetailProduct from "./DetailProduct";
import { NavLink, Route, Redirect } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "iPhone 7plus",
    slug: "iphone-7",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-vanghong-1-1-org.jpg",
    description: "Product made by apple",
    price: 500,
    inventory: 10,
    rate: 4,
  },
  {
    id: 2,
    name: "iPhone XR",
    slug: "iPhone-XR",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-vang-1-1-org.jpg",
    description: "Product made by apple",
    price: 1500,
    inventory: 10,
    rate: 5,
  },
  {
    id: 3,
    name: "iPhone 11",
    slug: "iPhone-11",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-xanh-la-1-1-org.jpg",
    description: "Product made by apple",
    price: 2000,
    inventory: 12,
    rate: 5,
  },
];
class Product extends React.Component {
  render() {
    var { match } = this.props;
    const { url } = match;
    var loggedInUser = localStorage.getItem("user");
    if (loggedInUser === null) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <h2>DANH SÁCH SẢN PHẨM </h2>
        <div className="row">
          {products.map((product, index) => (
            <NavLink
              className="block"
              to={`${url}/${product.slug}`}
              key={index}
            >
              <div className="col-4">
                <ProductItem product={product} />
              </div>
            </NavLink>
          ))}
        </div>
        <Route path="/product/:slug" component={DetailProduct} />
      </div>
    );
  }
}
export default Product;
