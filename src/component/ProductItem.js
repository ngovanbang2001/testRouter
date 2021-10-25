import React from "react";
class ProductItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={product.image} className="img-fluid" alt="" />
          <a>
            <div className="mask waves-light waves-effect waves-light"></div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a>{product.name}</a>
            </strong>
          </h4>

          <p className="card-text">{product.description}</p>
          <div className="card-footer">
            <span className="left">{product.price}$</span>
            <span className="right">
              <a
                className="btn-floating blue-gradient"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
