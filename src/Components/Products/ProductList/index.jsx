import React, { useEffect } from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import useProductStore from "../../../Stores/productStore";
import useCartStore from "../../../Stores/cartStore";

const ProductList = () => {
   const { products, setProducts } = useProductStore();
   const { addToCart } = useCartStore();

   useEffect(() => {
      fetch("https://dummyjson.com/products")
         .then((response) => response.json())
         .then((data) => setProducts(data.products));
   }, [setProducts]);

   return (
      <Stack>
         {products.map((product) => (
            <Stack key={product.id} direction='row' align='center'>
               <Text>{product.title}</Text>
               <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </Stack>
         ))}
      </Stack>
   );
};

export default ProductList;
