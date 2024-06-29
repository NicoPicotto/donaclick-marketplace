import { Stack, Heading, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import ProductList from "../../Components/Products/ProductList";
import Cart from "../../Components/Products/Cart";

const HomeView = () => {
   return (
      <Stack>
         <Heading>Esto está en develop</Heading>
         <Cart />
         <Suspense fallback={<Spinner />}>
            <ProductList />
         </Suspense>
      </Stack>
   );
};

export default HomeView;
