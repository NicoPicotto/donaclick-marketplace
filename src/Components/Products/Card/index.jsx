/* eslint-disable react/prop-types */
import {
   Stack,
   Text,
   Button,
   Heading,
   Image,
   useToast,
} from "@chakra-ui/react";
import useCartStore from "../../../Stores/cartStore";
import { IoMdArrowForward, IoMdCart } from "react-icons/io";

const ProductCard = ({ thumbnail, title, price, product }) => {
   const { addToCart } = useCartStore();
   const toast = useToast();

   const handleAdd = () => {
      addToCart(product);

      toast({
         title: "Producto añadido.",
         status: "success",
         variant: "left-accent",
         duration: 4000,
         isClosable: true,
         position: "bottom",
      });
   };

   return (
      <Stack bgColor='white' borderRadius={10} shadow='md' p='1rem'>
         <Stack borderRadius={9} outline='1px solid rgba(239, 239, 239, 1)'>
            <Image src={thumbnail} borderRadius={9} />
         </Stack>
         <Stack justify='space-between' h='100%'>
            <Stack direction='row' justify='space-between' marginBottom='1rem'>
               <Heading size='md'>{title}</Heading>
               <Text fontSize='lg' fontWeight='regular'>
                  ${price}
               </Text>
            </Stack>
            <Stack>
               <Stack
                  bgColor='azul'
                  borderRadius={7}
                  paddingInline={3}
                  paddingBlock={1}
                  direction='row'
                  align='center'
               >
                  <Text fontSize='xs'>🧡</Text>
                  <Text color='blanco' fontSize='xs'>
                     Estás aportando{" "}
                     <Text as='span' fontWeight='bold'>
                        4 platos de comida
                     </Text>
                     .
                  </Text>
               </Stack>
               <Stack direction='row' align='center'>
                  {" "}
                  <Button rightIcon={<IoMdArrowForward />} w='100%'>
                     Ver más
                  </Button>{" "}
                  <Button
                     rightIcon={<IoMdCart />}
                     variant='outline'
                     w='100%'
                     onClick={handleAdd}
                  >
                     Añadir al carrito
                  </Button>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default ProductCard;
