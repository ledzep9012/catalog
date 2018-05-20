const fetchProducts = () => {
  return fetch("/v1/products")
};

export default { fetchProducts };
