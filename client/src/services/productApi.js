const fetchProducts = () => {
  return fetch("/v1/products");
};

const editProduct = data => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    mode: "cors"
  };

  return fetch("v1/products/edit", options);
};

const addProduct = data => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    mode: "cors"
  };

  return fetch("v1/products/create", options);
};

const deleteProduct = data => {
  const options = {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    mode: "cors"
  };

  return fetch("v1/products/", options);
};
export default { fetchProducts, editProduct, addProduct, deleteProduct };
