import { useRef, useEffect, useState } from "react";
import {
   Stack,
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   IconButton,
   useDisclosure,
   Tag,
   Text,
   Button,
   Alert,
   AlertTitle,
   AlertIcon,
   Image,
} from "@chakra-ui/react";
import useCartStore from "../../../Stores/cartStore";
import { IoMdCart, IoMdTrash } from "react-icons/io";

const Cart = () => {
   const { cart, removeFromCart } = useCartStore();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [total, setTotal] = useState(null);

   const btnRef = useRef();

   useEffect(() => {
      const totalNumber = cart.reduce((acc, item) => {
         return acc + item.quantity * item.price;
      }, 0);

      const formateado = totalNumber.toFixed(2);

      setTotal(formateado);
   }, [cart]);

   return (
      <>
         <Stack position='relative'>
            <IconButton
               icon={<IoMdCart color='white' fontSize={25} />}
               variant='ghost'
               ref={btnRef}
               onClick={onOpen}
            ></IconButton>
            <Tag
               position='absolute'
               size='sm'
               paddingInline={0}
               alignItems='center'
               justifyContent='center'
               right={-1}
               top={-1}
               color='blanco'
               fontWeight='bold'
               bgColor='naranja'
               pointerEvents='none'
            >
               {cart.length}
            </Tag>
         </Stack>
         <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size='md'
         >
            <DrawerOverlay />
            <DrawerContent bgColor='fondo'>
               <DrawerCloseButton />
               <DrawerHeader>Tu Carrito</DrawerHeader>

               <DrawerBody>
                  {cart.length === 0 && (
                     <Alert status='warning'>
                        <AlertIcon />
                        Aún no tenés productos en tu carrito.
                     </Alert>
                  )}
                  {cart.map((item) => (
                     <Stack
                        key={item.id}
                        bgColor='white'
                        p='1rem'
                        justify='space-between'
                        direction='row'
                        borderRadius={10}
                        marginBottom={2}
                        position='relative'
                        shadow='sm'
                     >
                        <Stack direction='row' gap={3}>
                           <Image
                              src={item.thumbnail}
                              w='5rem'
                              h='100%'
                              objectFit='cover'
                              outline='1px solid rgba(239, 239, 239, 1)'
                           />
                           <Stack gap={1}>
                              <Text fontSize='lg' lineHeight={1.3}>
                                 {item.title}
                              </Text>
                           </Stack>
                        </Stack>
                        <Stack h='100%' gap={0} align='end' minW='6rem'>
                           <Text fontSize='xl'>
                              ${(item.price * item.quantity).toFixed(2)}
                           </Text>
                           {item.quantity > 1 && (
                              <Text color='gris' fontSize='xs'>
                                 {item.quantity} x ${item.price} c/u
                              </Text>
                           )}

                           <IconButton
                              position='absolute'
                              bottom={2}
                              right={2}
                              variant='unstyled'
                              size='sm'
                              color='gris'
                              icon={<IoMdTrash />}
                              onClick={() => removeFromCart(item.id)}
                           >
                              Quitar del carrito
                           </IconButton>
                        </Stack>
                     </Stack>
                  ))}
               </DrawerBody>

               <DrawerFooter>
                  {cart.length !== 0 && (
                     <Stack w='100%'>
                        <Alert
                           status='success'
                           rounded={10}
                           variant='left-accent'
                        >
                           <AlertIcon />
                           <AlertTitle>Total: ${total}</AlertTitle>
                        </Alert>

                        <Button w='100%'>COMPRAR</Button>
                     </Stack>
                  )}
               </DrawerFooter>
            </DrawerContent>
         </Drawer>
      </>
   );
};

export default Cart;
