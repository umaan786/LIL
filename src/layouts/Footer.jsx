import { Link } from "react-router-dom";
export default function Footer({ categories }) {
  return (
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-6 col-lg-4">
            <div className="widget widget-about">
              <h4>Laptops in Lahore</h4>
              <p>
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat.
              </p>
            </div>
          </div> */}

          <div className="col-sm-6 col-lg-6">
            <div className="custom-address">
              <h6>Shop Location</h6>
              <p className="location-address">
                <span>
                  <i className="icon-map-marker"></i>
                </span>
                LG86-basement hafeez center Gulberg, Lahore, Pakistan
              </p>
              <a href="tel:+923259008989">
                <i class="icon-phone" />
                +923259008989
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6">
            <div className="custom-address">
              <h6>Shop Location</h6>
              <p className="location-address">
                <span>
                  <i className="icon-map-marker"></i>
                </span>
                LG04-basement hafeez center Gulberg, Lahore, Pakistan
              </p>
              <a href="tel:+923234109037">
                <i class="icon-phone" />
                +923234109037
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
