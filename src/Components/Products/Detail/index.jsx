/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Stack, Grid } from "@chakra-ui/react";

import DetailIzquierda from "./DetailIzquierda";
import DetailDerecha from "./DetailDerecha";

const ProductDetail = ({ current }) => {
   return (
      <Stack>
         <Grid templateColumns='repeat(5, 1fr)' gap='1rem' position='relative'>
            <DetailIzquierda current={current} />
            <DetailDerecha current={current} />
         </Grid>
      </Stack>
   );
};

export default ProductDetail;
