import { productsList } from "../../data/products";
import { paginate } from "../../utils/list";
import { getCategory } from "./categories";
import { categoryType } from "../../constants";

export const getProductsList = (
  productType,
  search,
  selectedCategory,
  priceRange,
  sortBy,
  pagination
) => {
  const AllData = [...productsList];

  // filter
  const filteredData = AllData.filter((item) => {
    return (
      item.active == true &&
      (productType === "all" || item.type === productType) &&
      (selectedCategory === "" || item.categoryId == selectedCategory) &&
      (search === "" ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        (item.description != "" &&
          item.description.toLowerCase().includes(search.toLowerCase()))) &&
      parseFloat(priceRange[0]) <= parseFloat(item.price) &&
      parseFloat(priceRange[1]) >= parseFloat(item.price)
    );
  });

  // sort
  filteredData.sort((a, b) =>
    parseFloat(a.price) > parseFloat(b.price)
      ? 1
      : parseFloat(b.price) > parseFloat(a.price)
      ? -1
      : 0
  );
  if (sortBy === "high") filteredData.reverse();

  // paginate
  const paginatedList = paginate(
    filteredData,
    pagination.perPage,
    pagination.page
  );

  paginatedList.map((item) => {
    item.category = getCategory(item.categoryId);
  });

  return {
    list: paginatedList,
    paginationDetail: { total: filteredData.length },
  };
};

export const getProduct = (id) => {
  const AllData = [...productsList];
  const product = AllData.find((item) => item.id == id);
  if (product) {
    product.category = getCategory(product.categoryId);
    return product;
  }
  return null;
};

export const getRelatedProducts = (id) => {
  const AllData = [...productsList];
  const product = AllData.find((item) => item.id == id);
  const related = AllData.filter((item) => {
    return (
      item.active == true &&
      item.id != id &&
      item.type === product.type &&
      item.categoryId === product.categoryId &&
      (product.type === categoryType.Accessories ||
        item.details.Series.toLowerCase() ===
          product.details.Series.toLowerCase() ||
        item.details.Model.toLowerCase() ===
          product.details.Model.toLowerCase() ||
        item.details.CPU.toLowerCase() === product.details.CPU.toLowerCase() ||
        item.details.Generation.toLowerCase() ===
          product.details.Generation.toLowerCase() ||
        item.details.Ram.toLowerCase() === product.details.Ram.toLowerCase() ||
        item.details.HDD.toLowerCase() === product.details.HDD.toLowerCase())
    );
  });

  related.map((item) => {
    item.category = getCategory(item.categoryId);
  });

  return related ?? [];
};

export const getNewArrivals = () => {
  const AllData = [...productsList];

  const arrivals = AllData.filter((item) => {
    return (
      item.active == true && item.isNewArrival == true
      // && item.type === categoryType.Laptop
    );
  });

  arrivals.map((item) => {
    item.category = getCategory(item.categoryId);
  });

  return arrivals ?? [];
};
