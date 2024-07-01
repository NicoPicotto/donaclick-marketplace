import {
   Stack,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuGroup,
   MenuDivider,
   Button,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const MenuCategorías = () => {
   return (
      <Menu>
         <MenuButton
            as={Button}
            colorScheme='pink'
            variant='link'
            size='sm'
            rightIcon={<IoIosArrowDown />}
            _active={{ color: "blanco" }}
         >
            Categorías
         </MenuButton>
         <MenuList p="1rem">
            <Stack direction='row' gap='2rem'>
               <Stack>
                  <MenuGroup title='Indumentaria' marginInline={3}>
                     <MenuItem fontSize='sm'>Remeras</MenuItem>
                     <MenuItem fontSize='sm'>Buzos</MenuItem>
                     <MenuItem fontSize='sm'>Pantalones</MenuItem>
                  </MenuGroup>
                  <MenuDivider h='100%' />
                  <MenuGroup title='Indumentaria' marginInline={3}>
                     <MenuItem fontSize='sm'>Remeras</MenuItem>
                     <MenuItem fontSize='sm'>Buzos</MenuItem>
                     <MenuItem fontSize='sm'>Pantalones</MenuItem>
                  </MenuGroup>
               </Stack>
               <Stack>
                  <MenuGroup title='Indumentaria' marginInline={3}>
                     <MenuItem fontSize='sm'>Remeras</MenuItem>
                     <MenuItem fontSize='sm'>Buzos</MenuItem>
                     <MenuItem fontSize='sm'>Pantalones</MenuItem>
                  </MenuGroup>
                  <MenuDivider h='100%' />
                  <MenuGroup title='Indumentaria' marginInline={3}>
                     <MenuItem fontSize='sm'>Remeras</MenuItem>
                     <MenuItem fontSize='sm'>Buzos</MenuItem>
                     <MenuItem fontSize='sm'>Pantalones</MenuItem>
                  </MenuGroup>
               </Stack>
               <Stack>
                  <MenuGroup title='Indumentaria' marginInline={3}>
                     <MenuItem fontSize='sm'>Remeras</MenuItem>
                     <MenuItem fontSize='sm'>Buzos</MenuItem>
                     <MenuItem fontSize='sm'>Pantalones</MenuItem>
                  </MenuGroup>
                  <MenuDivider h='100%' />
                  <MenuGroup title='Indumentaria' marginInline={3}>
                     <MenuItem fontSize='sm'>Remeras</MenuItem>
                     <MenuItem fontSize='sm'>Buzos</MenuItem>
                     <MenuItem fontSize='sm'>Pantalones</MenuItem>
                  </MenuGroup>
               </Stack>
            </Stack>
         </MenuList>
      </Menu>
   );
};

export default MenuCategorías;
