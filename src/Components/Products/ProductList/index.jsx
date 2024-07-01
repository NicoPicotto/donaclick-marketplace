import React, { useEffect } from "react";
import { Button, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import useProductStore from "../../../Stores/productStore";
import useCartStore from "../../../Stores/cartStore";
import ProductCard from "../Card";

const ProductList = () => {
   const { products, setProducts } = useProductStore();
   const { addToCart } = useCartStore();

   useEffect(() => {
      fetch("https://dummyjson.com/products")
         .then((response) => response.json())
         .then((data) => setProducts(data.products));
   }, [setProducts]);

   return (
      <SimpleGrid columns={3} gap='1rem' paddingBlock='2rem'>
         {products.map((product) => (
            <ProductCard
               key={product.index}
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
