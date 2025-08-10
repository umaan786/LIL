import { Link } from "react-router-dom";
import { NeedDummy } from "../../utils/images";

export default function NeedAdvice() {
  return (
    <div class="container mt-6 mb-6">
      <div class="cta cta-border mb-5 cta-banner">
        <img src={NeedDummy} alt="camera" class="cta-img" />
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="cta-content">
              <div class="cta-text text-center text-white">
                <p>
                  <strong>Need Advice?</strong> <br />
                  Find your perfect laptop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-heading-advice">
        <p>
          Do you need a new <b>laptop</b> but are confused with all the options
          out there? If you can’t decide what the best <b>laptops</b> are for
          your personal needs, or what’s a good <b>laptop price in Pakistan</b>,
          we have your back. <b>Lahore Laptops</b> offers the{" "}
          <b>best laptops</b> for every need, from <b>business laptops</b> to{" "}
          <b>mini laptops</b> and <b>gaming laptops</b>. So whether you need a{" "}
          <b>laptop</b> for work, design, or entertainment, the{" "}
          <b>Lahore laptops</b> range has it all. Shop <b>laptops</b> from the
          best <b>laptop</b> brands like <b>Apple</b>, <b>HP</b>, <b>Lenovo</b>,{" "}
          <b>Dell</b>, <b>Macbook</b>, <b>Acer</b>, <b>Huawei</b> at a great{" "}
          <b>laptop</b> price in <b>Pakistan</b>. Don’t forget to check out{" "}
          <b>Lahore Laptop’s</b> amazing laptop offers in Pakistan for even
          better <b>laptop deals</b> and make the most of your online shopping
          experience.
        </p>
      </div>
    </div>
  );
}
