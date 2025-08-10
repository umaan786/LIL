import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { Laptops, Accessories } from "../../router/routes";

export default function HomeBanner() {
  return (
    <div class="intro-slider-container mb-5">
      <div className="container">
        <OwlCarousel
          className="owl-theme owl-nav-inside owl-light intro-slider"
          dots={true}
          nav={false}
          loop
          slideBy={1}
          scrolling={1}
          items={1}
        >
          <div class="intro-slide slide-one">
            <div class="container intro-content">
              <div class="row justify-content-start justify-content-md-center">
                <div class="col-auto col-sm-10 col-md-6 col-lg-6 ml-15">
                  <h1 class="intro-title banner-laptops-title">Laptops</h1>
                  <h4 class="intro-subtitle text-third banner-laptops-description">
                    We deal in all kind of laptops, Professional Laptop,
                    Business Laptops, Laptop for Students, Gaming Laptops and
                    Macbooks.
                  </h4>

                  {/* <div class="intro-price">
                    <sup class="intro-old-price">$349,95</sup>
                    <span class="text-third">
                      {" "}
                      $279<sup>.99</sup>{" "}
                    </span>
                  </div> */}

                  <Link
                    to={{
                      pathname: Laptops,
                      state: null,
                    }}
                    class="btn btn-primary btn-round banner-shop-button"
                  >
                    <span>Shop</span>
                    <i class="icon-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="intro-slide slide-two">
            <div class="container intro-content">
              <div class="row justify-content-start justify-content-md-start">
                <div class="col-auto col-sm-7 col-md-4 col-lg-4">
                  {/* <h3 class="intro-subtitle text-primary">New Arrival</h3> */}
                  <h1 class="intro-title banner-laptops-title">Accessories</h1>

                  <h4 class="intro-subtitle text-third banner-laptops-description">
                    Laptop parts and accessories in Pakistan at the best price.{" "}
                    {/* <br /> */}
                    Variety of laptops accessory supplies to suit everyday
                    needs.
                  </h4>

                  <Link
                    to={{
                      pathname: Accessories,
                      state: null,
                    }}
                    class="btn btn-primary btn-round banner-shop-button"
                  >
                    <span>Shop</span>
                    <i class="icon-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
