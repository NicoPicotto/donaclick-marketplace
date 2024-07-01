import { Stack, Heading, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import ProductList from "../../Components/Products/ProductList";
import Cart from "../../Components/Products/Cart";

const HomeView = () => {
   return (
      <Stack align='center'>
         <Stack maxW='75rem' w='100%'>
            <Suspense fallback={<Spinner />}>
               <ProductList />
            </Suspense>
         </Stack>
      </Stack>
   );
};

export default HomeView;
