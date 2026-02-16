import { Link } from "react-router";
import Card from "../../product card/card";

function Products({ product }) {
  return (
    <>
      {product.map((good) => (
        <Link to={`/product/${good.title}`}>
          <Card
            Title={good.title}
            src={good.images[0]}
            dollar={good.price}
            key={good.id}
          />
        </Link>
      ))}
    </>
  );
}

export default Products;
