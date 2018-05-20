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

  return fetch("v1//products/edit", options);
};

export default { fetchProducts, editProduct };
