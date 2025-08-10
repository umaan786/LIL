import React, { useState, useEffect } from "react";
import ProductBreadCrumbs from "../components/productDetail/productBreadCrumbs";
import ProductDetailView from "../components/productDetail/productDetailView";
// import ProductDetailsTabs from "../components/productDetail/productsDetailsTabs";
import SimilarProducts from "../components/productDetail/similarProducts";
import { useHistory } from "react-router-dom";
import { Home } from "../router/routes";
import { getProduct, getRelatedProducts } from "../services";

export default function Product() {
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([]);
    const id = history.location?.state?.id;
    if (id) {
      const detail = getProduct(id);
      if (detail) {
        setProduct(detail);
      } else {
        history.push(Home);
      }
    } else {
      history.push(Home);
    }
  }, [history.location]);

  useEffect(() => {
    if (product) {
      const data = getRelatedProducts(product.id);
      setList(data);
    }
  }, [product]);

  return (
    <main className="main">
      {product && (
        <>
          <ProductBreadCrumbs product={product} />
          <ProductDetailView product={product} />
          <div className="container">
            {/* <ProductDetailsTabs /> */}
            <SimilarProducts product={product} list={list} />
          </div>
        </>
      )}
    </main>
  );
}
