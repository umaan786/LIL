import { categoriesList } from "../../data/categories";
import { categoryType } from "../../constants";

export const getCategoriesList = (type = categoryType.All) => {
  const list = [...categoriesList];
  return list.filter(
    (item) =>
      item.active == true && (type === categoryType.All || item.type === type)
  );
};

export const getCategory = (id) => {
  const list = [...categoriesList];
  return list.find((item) => item.id == id);
};

export const getBrands = () => {
  const list = [...categoriesList];
  return list.filter(
    (item) => item.active == true && item.type === categoryType.Laptop
  );
};
