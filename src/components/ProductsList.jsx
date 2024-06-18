import ProductCard from "./ProductCard";
function ProductsList({ data }) {
  return (
    <div>
      {data.products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
