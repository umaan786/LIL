import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { LaptopImage } from "../../utils/images";
import { getBrands } from "../../services";
import { useState } from "react";
import { Laptops } from "../../router/routes";

export default function PopularCategories() {
  const [list, setList] = useState(getBrands());

  return (
    <div className="container">
      <h2 className="title text-center mb-4">Explore Popular Brands</h2>

      <div className="cat-blocks-container">
        <div className="row">
          {list.map((item, index) => {
            return (
              <div className="col-6 col-sm-4 col-lg-2" key={index}>
                <Link
                  to={{
                    pathname: Laptops,
                    state: { category: item },
                  }}
                  className="cat-block"
                >
                  <figure>
                    <span>
                      <img
                        src={item.image ? item.image : LaptopImage}
                        alt="Category image"
                      />
                    </span>
                  </figure>

                  {/* <h3 className="cat-block-title">{item.name}</h3> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
