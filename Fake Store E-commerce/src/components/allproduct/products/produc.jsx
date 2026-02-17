import { Link } from "react-router";
import Card from "../../product card/card";
import { useEffect } from "react";

function Products({ product, TagArray, stock }) {
  const filteredProducts = TagArray.length > 0 ? TagArray : product;
  useEffect(() => {
    console.log("filteredProducts:", filteredProducts);
  }, [filteredProducts, stock]);
  return (
    <>
      {filteredProducts.map((good) => (
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
