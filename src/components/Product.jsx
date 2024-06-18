import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    `https://dummyjson.com/product/${id}`
  );
  console.log(data);
  return (
    <>
      {data && (
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl m-10">
            <figure>
              <img src={data.thumbnail} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>Description: {data.description}</p>
              <p>Category: {data.category}</p>
              <p>Price: {data.price}$</p>
              <p>Discount Percentage: {data.discountPercentage}</p>
              <p>Rating: {data.rating}</p>
              <p>Stock: {data.stock}</p>
              <p>Tags: {data.tags}</p>
              <p>Brand: {data.brand}</p>
              <div className="flex items-center gap-4 mb-10">
                <button className="btn btn-secondary">-</button>
                <div>0</div>
                <button className="btn btn-secondary">+</button>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
