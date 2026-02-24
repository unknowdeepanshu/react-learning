import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState("");
  const [count, setCount] = useState(0);

  const [product, setProduct] = useState([]);

  async function findproduct() {
    const datas = await fetch(
      "https://dummyjson.com/products?limit=500&select=availabilityStatus,brand,category,description,title,discountPercentage,images,price,rating,returnPolicy,reviews,stock,shippingInformation,tags,thumbnail,tags",
    ).then((response) => response.json());
    console.log("this is data new", datas);
    const allproduct = datas.products;
    setProduct(datas.products);
    console.log("all product :-", allproduct);
    console.log("product :-", product);

    // setCount(data[1].image);
    setdata(datas.products[0].images[0]);
    console.log("this data", data);
  }

  useEffect(() => {
    findproduct();
  }, [count]);
  return (
    <>
      <h1>I am dipanshu starting</h1>
      <h2>Building Fake Store E-commerce</h2>

      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>click me click me</button>
      <div className="flex flex-wrap gap-4">
        {product.map((items) => (
          <img
            src={items.thumbnail}
            width="300rem"
            height="300rem"
            className="border-8 border-indigo-600 p-10"
          />
        ))}
      </div>
      <img
        src={data}
        width="300rem"
        height="300rem"
        className="border-8 border-indigo-600 p-10"
      />
    </>
  );
}

export default App;
