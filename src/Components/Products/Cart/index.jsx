import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import useCartStore from "../../../Stores/cartStore";

const Cart = () => {
   const { cart, removeFromCart, clearCart } = useCartStore();

   return (
      <Stack>
         <Text>Cart</Text>
         {cart.map((item) => (
            <Stack key={item.id} direction='row' align='center'>
               <Text>
                  {item.name} (x{item.quantity})
               </Text>
               <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </Stack>
         ))}
         {cart.length > 0 && <Button onClick={clearCart}>Clear Cart</Button>}
      </Stack>
   );
};

export default Cart;
