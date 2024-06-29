import { Stack, Text, Link, Input, Image } from "@chakra-ui/react";
import logo from "/assets/Navbar/logo.png";

const Navbar = () => {
   return (
      <Stack bgColor='azul' paddingInline='2rem' paddingBlock='1rem'>
         <Stack maxW='75rem'>
            <Stack dir='row' justify='space-between'>
               <Image maxW='150px' src={logo} />
            </Stack>
            <Text>Parte de abajo</Text>
         </Stack>
      </Stack>
   );
};

export default Navbar;
