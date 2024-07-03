import { useState, useEffect } from "react";
import { Stack, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProductStore from "../../Stores/productStore";
import ProductDetail from "../../Components/Products/Detail/index";

const ProductDetailView = () => {
   const { products, fetchProducts } = useProductStore();
   const [current, setCurrent] = useState(null);
   const { id } = useParams();

   useEffect(() => {
      if (products.length === 0) {
         fetchProducts();
      }
   }, [fetchProducts, products.length]);

   useEffect(() => {
      if (products.length > 0) {
         const selected = products.find((prod) => prod.id === Number(id));
         setCurrent(selected || null);
      }
   }, [id, products]);

   if (!current) {
      return (
         <Stack p='2rem' w='100%' align='center'>
            <Spinner color='naranja' />
         </Stack>
      );
   }

   return (
      <Stack align='center' p="2rem">
         <Stack maxW='75rem' w='100%'>
            <ProductDetail current={current} />
         </Stack>
      </Stack>
   );
};

export default ProductDetailView;
