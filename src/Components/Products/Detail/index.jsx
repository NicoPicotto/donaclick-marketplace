/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Stack, Heading, Text } from "@chakra-ui/react";

const ProductDetail = ({ current }) => {

   return (
      <Stack>
         <Heading>{current.title}</Heading>
         <Text>{current.description}</Text>
         <Text>Category: {current.category}</Text>
         <Text>Price: ${current.price}</Text>
         <Text>Stock: {current.availableStock}</Text>
      </Stack>
   );
};

export default ProductDetail;
