import ProductCard from "./components/ProductCard";
import { IProduct } from "./interface";
import { useEffect } from "react";
import { getProductsList, selectProducts } from "./app/products/productsSlice";
import { useAppDispatch } from "./app/store";
import { useSelector } from "react-redux";

const ProductList = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  const { data, error, loading } = useSelector(selectProducts);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {error && <h3>Error: {error.message}</h3>}
    </div>
  );
};

export default ProductList;
