import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function ProductCard({ product }) {
  const { title, id, brand, availabilityStatus, category, price, thumbnail } =
    product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box m-5">
      <figure>
        <img src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <Link to={`/product/${id}`}>
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>
          <p>{brand}</p>
          <p>{price}</p>
          <p>{availabilityStatus}</p>
        </Link>
        <div className="card-actions justify-end">
          <Link to="/korzinka">
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
