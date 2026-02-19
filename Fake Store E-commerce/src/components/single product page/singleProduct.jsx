import { Link, useParams } from "react-router";
import Card from "../product card/card";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../features/product";
import { useEffect, useState } from "react";
import CardSkeleton from "../product card/cardSkeleton";

function Singleproduct() {
  const [ready, setReady] = useState(false);

  const dispatch = useDispatch();

  //use select from useSelector to get the product and user data from the store
  const userProducts = useSelector((state) => state.product.user);
  const AllProduct = useSelector((state) => state.product.product.products);
  const { name } = useParams();

  // console.log(name);
  const singleProduct = AllProduct.find((goods) => goods.title === name);
  const tags = singleProduct.tags;
  let randomIndex = 0;
  if (tags.length === 0) {
    randomIndex = 0;
  } else {
    randomIndex = Math.floor(Math.random() * tags.length) - 1;
    if (randomIndex == -1) randomIndex = 0;
  }

  const selectedTag = tags[randomIndex];

  console.log("user product", userProducts);
  // console.log("seleced tag", selectedTag);
  // console.log("tagss length", randomIndex);
  const someProduct = AllProduct.filter(
    (goods) =>
      goods.tags?.includes(selectedTag) && goods.title !== singleProduct.title,
  );

  // console.log("this ", someProduct);

  // console.log("check", singleProduct);
  if (!singleProduct) return <h1>Loading...</h1>;
  useEffect(() => {
    let loadedCount = 0;

    someProduct.forEach((item) => {
      const img = new Image();
      img.src = item.images[0];
      img.onload = () => {
        loadedCount++;
        if (loadedCount === someProduct.length) {
          setReady(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount === someProduct.length) {
          setReady(true);
        }
      };
    });
  }, [someProduct]);

  return (
    <>
      <div className="bg-60sencondary">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex gap-4">
            <img
              src={`${singleProduct.images[0]}`}
              className="h-[30rem] w-[38rem] bg-amber-50"
            />
            <div className="flex flex-1 flex-col gap-10 text-white">
              <h1 className="text-5xl">{singleProduct.title}</h1>
              <h3 className="min-h-fit pr-60">{singleProduct.description}</h3>
              <h2 className="text-3xl">${singleProduct.price}</h2>
              <div className="flex w-48 flex-col gap-2">
                <button
                  onClick={(e) => dispatch(addProduct(singleProduct))}
                  className="bg-30blue rounded-3xl p-2 hover:cursor-pointer"
                >
                  Add To Cart
                </button>

                <Link
                  to={`/you-cart`}
                  className="bg-30blue rounded-3xl p-2 text-center hover:cursor-pointer"
                >
                  <button>Buy now</button>
                </Link>
              </div>
            </div>
          </div>

          <hr className="border-10blue my-6 sm:mx-auto lg:my-8" />
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-5xl font-bold text-white">Similar Products</h1>
            <div className="flex gap-4">
              {ready
                ? someProduct.map((good) => (
                    <Link to={`/product/${good.title}`}>
                      <Card
                        Title={good.title}
                        src={good.images[0]}
                        dollar={good.price}
                        key={good.id}
                      />
                    </Link>
                  ))
                : Array.from({ length: 6 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;
