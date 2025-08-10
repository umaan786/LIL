import { useState } from "react";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getNewArrivals } from "../../services";
import { noImage } from "../../utils/images";
import { Link } from "react-router-dom";
import { getDiscountAmount } from "../../helpers/products";
import { discountTypes, categoryType } from "../../constants";

export default function NewArrivals() {
  const [openTab, setOpenTab] = useState(1);
  const [list, setList] = useState(getNewArrivals());

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'><</div>",
      "<div class='nav-btn next-slide'>></div>",
    ],
    dots: true,
    autoplay: false,
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
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };

  return (
    <div className="container new-arrivals">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">New Arrivals</h2>
        </div>

        {/* <div className="heading-right">
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className={"nav-link " + (openTab === 1 ? "active" : "")}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                id="new-all-link"
                data-toggle="tab"
                href="#new-all-tab"
                role="tab"
                aria-controls="new-all-tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + (openTab === 2 ? "active" : "")}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                id="new-tv-link"
                data-toggle="tab"
                href="#new-tv-tab"
                role="tab"
                aria-controls="new-tv-tab"
                aria-selected="false"
              >
                TV
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + (openTab === 3 ? "active" : "")}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                id="new-computers-link"
                data-toggle="tab"
                href="#new-computers-tab"
                role="tab"
                aria-controls="new-computers-tab"
                aria-selected="false"
              >
                Computers
              </a>
            </li>
          </ul>
        </div> */}
      </div>

      <div className="tab-content tab-content-carousel just-action-icons-sm">
        <div
          className={
            openTab === 1
              ? "tab-pane fade p-0 show active"
              : "tab-pane p-0 fade"
          }
          id="new-all-tab"
          role="tabpanel"
          aria-labelledby="new-all-link"
        >
          <div className="">
            <div className="products mb-3">
              <div className="row justify-content-center">
                {list.map((item, index) => {
                  const { discountAmount, discountType, discountPrice } =
                    getDiscountAmount(item.category, item);
                  return (
                    <div
                      className="col-6 col-md-4 col-lg-4 col-xl-3"
                      key={index}
                    >
                      <div className="product product-7 text-center">
                        <figure className="product-media">
                          {discountAmount > 0 && (
                            <span className="product-label label-circle label-top">
                              Save {discountAmount.toLocaleString()}{" "}
                              {discountType === discountTypes.amount
                                ? "PKR"
                                : "%"}
                            </span>
                          )}
                          <Link
                            to={{
                              pathname: `/productDetails/${item.id}`,
                              state: { id: item.id },
                            }}
                          >
                            <img
                              src={
                                item.images.length > 0
                                  ? item.images[0]
                                  : noImage
                              }
                              alt="Product image"
                              className="product-image"
                            />
                          </Link>
                        </figure>

                        <div className="product-body">
                          <div className="product-cat">
                            {item.type === categoryType.Laptop
                              ? "Laptop"
                              : "Accessories"}
                          </div>
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
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <OwlCarousel
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            {...options}
          >
            {list.map((item, index) => {
              const { discountAmount, discountType, discountPrice } =
                getDiscountAmount(item.category, item);

              return (
                <div className="product product-2" key={index}>
                  <figure className="product-media">
                    {discountAmount > 0 && (
                      <span className="product-label label-circle label-top">
                        Save {discountAmount}{" "}
                        {discountType === discountTypes.amount ? "PKR" : "%"}
                      </span>
                    )}
                    <Link
                      to={{
                        pathname: `/productDetails/${item.id}`,
                        state: { id: item.id },
                      }}
                    >
                      <img
                        src={item.images.length > 0 ? item.images[0] : noImage}
                        alt="Product image"
                        className="product-image"
                      />
                    </Link>
                  </figure>

                  <div className="product-body">
                    <div className="product-cat"> {item.type === categoryType.Laptop
                              ? "Laptop"
                              : "Accessories"}</div>
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
                  </div>
                </div>
              );
            })}
          </OwlCarousel> */}
        </div>
      </div>
    </div>
  );
}
