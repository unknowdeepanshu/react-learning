import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productFetch } from "./features/product.js";

function AppInitializer({ children }) {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    dispatch(productFetch())
      .unwrap()
      .then(() => setReady(true))
      .catch(() => setReady(true));
  }, [dispatch]);

  if (!ready) {
    return <h2>Loading products...</h2>;
  }

  return children;
}

export default AppInitializer;
