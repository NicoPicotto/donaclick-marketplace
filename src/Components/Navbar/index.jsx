import { Stack, Link, Image, Button, Divider } from "@chakra-ui/react";
import logo from "/assets/Navbar/logo.png";
import Cart from "../Products/Cart";
import InputCustom from "../Commons/InputCustom";
import { Link as ReachLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import MenuCategorías from "./MenuCategorias";

const Navbar = () => {
   return (
      <Stack
         bgColor='azul'
         paddingInline='2rem'
         paddingBlock='1rem'
         align='center'
         position='sticky'
         top={0}
         zIndex={100}
         shadow='md'
      >
         <Stack maxW='75rem' w='100%'>
            <Stack
               direction='row'
               align='center'
               gap='3rem'
               w='100%'
               justify='space-between'
            >
               <Link as={ReachLink} to='/'>
                  <Image src={logo} h='40px' />
               </Link>
               <Stack>
                  <InputCustom
                     w='30rem'
                     color='black'
                     placeholder='Buscar...'
                     icon={IoMdSearch}
                  />
               </Stack>

               <Stack direction='row' align='center' gap='2rem'>
                  <Button>Ingresar</Button>
                  <Cart />
               </Stack>
            </Stack>
            <Divider marginTop='1rem' />
            <Stack
               align='center'
               justify='space-between'
               w='100%'
               direction='row'
            >
               <MenuCategorías />
               <Button size='sm' variant='link'>
                  Ong´s
               </Button>
               <Button size='sm' variant='link'>
                  Sumá tu ONG
               </Button>
               <Button size='sm' variant='link'>
                  Ofertas
               </Button>
               <Button size='sm' variant='link'>
                  Quiero Vender
               </Button>
               <Button size='sm' variant='link'>
                  Sobre DonáClick
               </Button>
               <Button size='sm' variant='link'>
                  Preguntas Frecuentes
               </Button>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default Navbar;
