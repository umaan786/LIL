import { Link } from "react-router-dom";

export default function TopContactBar() {
  return (
    <div class="header-top">
      <div class="container">
        <div class="header-left">
          <a href="tel:+923259008989">
            <i class="icon-phone" />
            Call: +923259008989
          </a>
        </div>
        {/* <!-- End .header-left --> */}

        <div class="header-right">
          <ul className="top-social">
            <li>
              <Link href="#">
                <i className="icon-facebook-f" />
              </Link>
            </li>
            {/* <li>
              <Link href="#">
                <i className="icon-instagram"></i>
              </Link>
            </li> */}
            <li>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+923259008989"
              >
                <i className="icon-whatsapp" />
              </a>
            </li>
          </ul>
          {/* <!-- End .top-menu --> */}
        </div>
        {/* <!-- End .header-right --> */}
      </div>
      {/* <!-- End .container --> */}
    </div>
  );
}
