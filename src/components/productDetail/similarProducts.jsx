import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { noImage } from "../../utils/images";
import { Link } from "react-router-dom";
import { categoryType } from "../../constants";
import { scrollToTop } from "../../utils/common";
import { getDiscountAmount } from "../../helpers/products";
import { discountTypes } from "../../constants";

export default function SimilarProducts({ product, list }) {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: [
      "<div class='nav-btn prev-slide'><</div>",
      "<div class='nav-btn next-slide'>></div>",
    ],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <>
      {list.length > 0 && (
        <>
          <h2 className="title text-center mb-4">Related</h2>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {list.map((item, index) => {
              const activeImage =
                item.images.length > 0 ? item.images[0] : noImage;
              const { discountAmount, discountType, discountPrice } =
                getDiscountAmount(item.category, item);

              return (
                <div className="product product-7 text-center" key={index}>
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
                        onClick={scrollToTop}
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
                    <div className="product-cat">
                      {product.type === categoryType.Laptop
                        ? "Laptop"
                        : "Accessories"}
                    </div>
                    <h3 className="product-title">
                      <Link
                        onClick={scrollToTop}
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
              );
            })}
          </OwlCarousel>
        </>
      )}
    </>
  );
}
