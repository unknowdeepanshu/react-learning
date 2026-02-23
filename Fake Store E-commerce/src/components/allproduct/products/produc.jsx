import { Link } from "react-router";
import Card from "../../product card/card";
import { useEffect, useState } from "react";
import CardSkeleton from "../../product card/cardSkeleton";

function Products({ product, TagArray }) {
  const [ready, setReady] = useState(false);

  const filteredProducts = TagArray && TagArray.length > 0 ? TagArray : product;

  useEffect(() => {
    if (!filteredProducts || filteredProducts.length === 0) return;

    let loadedCount = 0;

    filteredProducts.forEach((item) => {
      const img = new Image();
      img.src = item.images?.[0];

      img.onload = () => {
        loadedCount++;
        if (loadedCount === filteredProducts.length) {
          setReady(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount === filteredProducts.length) {
          setReady(true);
        }
      };
    });
  }, [filteredProducts]);

  return (
    <>
      {ready
        ? filteredProducts.map((good) => (
            <Link key={good.id} to={`/product/${good.title}`}>
              <Card
                stock={good.availabilityStatus}
                Title={good.title}
                src={good.images?.[0]}
                dollar={good.price}
              />
            </Link>
          ))
        : Array.from({ length: 24 }).map((_, i) => <CardSkeleton key={i} />)}
    </>
  );
}

export default Products;
