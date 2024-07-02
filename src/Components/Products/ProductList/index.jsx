import { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import useProductStore from "../../../Stores/productStore";
import ProductCard from "../Card";

const ProductList = () => {
   const { products, fetchProducts } = useProductStore();

   useEffect(() => {
      fetchProducts();
   }, [fetchProducts]);

   return (
      <SimpleGrid columns={3} gap='1rem' paddingBlock='2rem'>
         {products.map((product) => (
            <ProductCard
               key={product.id}
               title={product.title}
               thumbnail={product.thumbnail}
               price={product.price}
               description={product.description}
               id={product.id}
               product={product}
            />
         ))}
      </SimpleGrid>
   );
};

export default ProductList;
