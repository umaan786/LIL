import { noImage } from "../../utils/images";
import { Link } from "react-router-dom";
import { getDiscountAmount } from "../../helpers/products";
import { discountTypes } from "../../constants";

export default function Product({ productsList, productTypeLabel }) {
  return (
    <div className="products mb-3">
      <div className="row justify-content-center">
        {productsList.map((item, index) => {
          const activeImage = item.images.length > 0 ? item.images[0] : noImage;
          const { discountAmount, discountType, discountPrice } =
            getDiscountAmount(item.category, item);
          return (
            <div className="col-6 col-md-4 col-lg-4 col-xl-3" key={index}>
              {/* <Link
                to={{
                  pathname: `/productDetails/${item.id}`,
                  state: { id: item.id },
                }}
              > */}
              <div className="product product-7 text-center">
                <figure className="product-media">
                  {discountAmount > 0 && (
                    <span className="product-label label-circle label-top">
                      Save {discountAmount.toLocaleString()}{" "}
                      {discountType === discountTypes.amount ? "PKR" : "%"}
                    </span>
                  )}

                  <img
                    id={`products-list-main-image-${item.id}`}
                    src={activeImage}
                    alt="Product image"
                    className="product-image"
                  />

                  {/* <div className="product-action-vertical">
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist btn-expandable"
                  >
                    <span>add to wishlist</span>
                  </a>
                  <a
                    href="popup/quickView.html"
                    className="btn-product-icon btn-quickview"
                    title="Quick view"
                  >
                    <span>Quick view</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare"
                    title="Compare"
                  >
                    <span>Compare</span>
                  </a>
                </div> */}

                  <div className="product-action">
                    <Link
                      to={{
                        pathname: `/productDetails/${item.id}`,
                        state: { id: item.id },
                      }}
                      className="btn-product btn-quickview"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </figure>

                <div className="product-body">
                  <div className="product-cat">{productTypeLabel}</div>
                  <h3 className="product-title">
                    <Link
                      to={{
                        pathname: `/productDetails/${item.id}`,
                        state: { id: item.id },
                      }}
                    >
                      {item.name}
                    </Link>
                  </h3>

                  <div
                    className={`product-price ${
                      discountAmount > 0 ? "canceled-price mb-0" : ""
                    }`}
                  >
                    RS {item.price.toLocaleString()}
                  </div>
                  {discountAmount > 0 && (
                    <div className="product-price">
                      RS {discountPrice.toLocaleString()}
                    </div>
                  )}

                  {/* <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "20%" }}></div>
                  </div>
                  <span className="ratings-text">( 2 Reviews )</span>
                </div> */}
                  {item.images.length > 1 && (
                    <div class="product-nav product-nav-thumbs">
                      {item.images.map((imageItem) => (
                        <span
                          onClick={() => {
                            document.getElementById(
                              `products-list-main-image-${item.id}`
                            ).src = imageItem;
                          }}
                          class="active cursor-pointer"
                        >
                          <img src={imageItem} />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* </Link> */}
            </div>
          );
        })}

        {productsList.length === 0 && (
          <div className="no-results">Out of stock.</div>
        )}
      </div>
    </div>
  );
}
