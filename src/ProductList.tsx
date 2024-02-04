import { useGetProductListQuery } from "./app/features/products/productsSlice";
import ProductCard from "./components/ProductCard";
import { IProduct } from "./interface";

const ProductList = () => {
  const { isLoading, data, error } = useGetProductListQuery({});

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data &&
        data.products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      {error && "data" in error && (
        <h3>Error: {error.data as React.ReactNode}</h3>
      )}
    </div>
  );
};

export default ProductList;

//** createAsyncThunk **//
/*
// const dispatch = useDispatch<AppDispatch>();
// const dispatch = useAppDispatch();
// useEffect(() => {
//   dispatch(getProductsList());
// }, [dispatch]);
// const { data, error, loading } = useSelector(selectProducts);
// if (loading) return <h3>Loading...</h3>;
*/
