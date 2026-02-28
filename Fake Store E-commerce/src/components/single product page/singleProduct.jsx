import { Link, useParams } from "react-router";
import Card from "../product card/card";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/product";
import { useEffect, useState, useMemo } from "react";
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
  const tags = singleProduct.tags || [];
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

  // this got some product related main product in this spage

  const someProduct = useMemo(() => {
    return AllProduct.filter(
      (goods) =>
        goods.tags?.includes(selectedTag) &&
        goods.title !== singleProduct.title,
    );
  }, [AllProduct, selectedTag, singleProduct.title]);

  const fewProduct = someProduct;

  console.log("this some product ", someProduct);

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
        <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
          <div className="flex gap-4">
            <img
              src={`${singleProduct.images[0]}`}
              className="h-[30rem] w-[38rem] bg-amber-50"
            />
            <div className="flex flex-1 flex-col gap-10 text-white">
              <h1 className="text-5xl">{singleProduct.title}</h1>
              <h3 className="min-h-fit pr-20">{singleProduct.description}</h3>
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
            <div className="flex max-w-7xl flex-col gap-4 p-4 py-6">
              {fewProduct.length > 7 ? (
                <SlideCard ready={ready} fewProduct={someProduct} />
              ) : (
                <div className="flex gap-4">
                  {ready
                    ? someProduct.map((good) => (
                        <Link key={good.id} to={`/product/${good.title}`}>
                          <Card
                            Title={good.title}
                            src={good.images[0]}
                            dollar={good.price}
                          />
                        </Link>
                      ))
                    : Array.from({ length: 6 }).map((_, i) => (
                        <CardSkeleton key={i} />
                      ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;

function SlideCard({ ready, fewProduct }) {
  const visibleCount = 7;
  const [index, setIndex] = useState(0);

  function Back() {
    if (index > 0) setIndex(index - 1);
  }

  function Next() {
    if (index + visibleCount < fewProduct.length) {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <div className="flex w-full items-center gap-4">
        <button onClick={Back} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#518b88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>

        <div className="lx:w-7xl w-2xl overflow-hidden lg:w-4xl">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 200}px)`,
            }}
          >
            {ready
              ? fewProduct.map((good) => (
                  <div key={good.id} className="min-w-[200px]">
                    <Link to={`/product/${good.title}`}>
                      <Card
                        Title={good.title}
                        src={good.images[0]}
                        dollar={good.price}
                      />
                    </Link>
                  </div>
                ))
              : Array.from({ length: 6 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
          </div>
        </div>

        <button onClick={Next} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#518b88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
