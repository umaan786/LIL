import { Link } from "react-router-dom";
import { Laptops, Accessories } from "../../router/routes";
import { categoryType } from "../../constants";
import { useEffect, useState } from "react";
import { noImage } from "../../utils/images";
import { getDiscountAmount } from "../../helpers/products";
import { discountTypes } from "../../constants";

export default function ProductDetailView({ product }) {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    setActiveImage(product.images.length > 0 ? product.images[0] : noImage);
  }, [product]);

  const { discountAmount, discountType, discountPrice } = getDiscountAmount(
    product.category,
    product
  );

  return (
    <div className="page-content">
      <div className="container">
        <div className="product-details-top">
          <div className="row">
            <div className="col-md-6">
              <div className="product-gallery product-gallery-vertical">
                <div className="row">
                  <figure className="product-main-image">
                    <img src={activeImage} alt="product image" />
                    {/* <a
                      href="#"
                      id="btn-product-gallery"
                      className="btn-product-gallery"
                    >
                      <i className="icon-arrows" />
                    </a> */}
                  </figure>

                  {product.images.length > 1 && (
                    <div
                      id="product-zoom-gallery"
                      className="product-image-gallery"
                    >
                      {product.images.map((imageItem) => (
                        <span
                          onClick={() => setActiveImage(imageItem)}
                          className={`product-gallery-item cursor-pointer ${
                            imageItem == activeImage ? "active" : ""
                          }`}
                        >
                          <img src={imageItem} />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <div className="product-details">
                <h1 className="product-title mb-2">
                  {product.name}{" "}
                  {!product.inStock && (
                    <span className="product-price">Out of stock</span>
                  )}
                </h1>

                {discountAmount > 0 ? (
                  <div className="product-price">
                    <span className="new-price">
                      RS {discountPrice.toLocaleString()}
                    </span>

                    <span className="old-price">
                      RS {product.price.toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <div className="product-price">
                    RS {product.price.toLocaleString()}
                  </div>
                )}

                <div className="product-content">
                  <p>{product.description}</p>
                </div>

                {product.details &&
                  Object.keys(product.details).map((attribute) => {
                    return (
                      <div class="">
                        <label>
                          {attribute}: {product.details[attribute]}
                        </label>
                      </div>
                    );
                  })}

                <div className="product-details-footer">
                  <div className="product-cat">
                    <span>Category:</span>
                    <Link
                      className="none-text-decoration"
                      to={{
                        pathname:
                          product.type === categoryType.Laptop
                            ? Laptops
                            : Accessories,
                        state: { category: product.category },
                      }}
                    >
                      {product.category.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
