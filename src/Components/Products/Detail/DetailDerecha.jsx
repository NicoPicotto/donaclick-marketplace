/* eslint-disable react/prop-types */
import {
   Stack,
   Heading,
   Text,
   Divider,
   Button,
   Tabs,
   TabList,
   TabPanels,
   Tab,
   TabPanel,
   TabIndicator,
   GridItem,
   Avatar,
   List,
   ListItem,
   ListIcon,
} from "@chakra-ui/react";
import StarRating from "./Rating";
import { MdCheckCircle } from "react-icons/md";

const DetailDerecha = ({ current }) => {
   return (
      <GridItem
         colSpan={2}
         bgColor='white'
         borderRadius={10}
         shadow='md'
         p='1rem'
         h='fit-content'
         position='sticky'
         top='8.5rem'
         as={Stack}
         gap='0.5rem'
         overflowY='scroll'
      >
         <Heading>{current.title}</Heading>
         <Text fontSize='sm'>{current.description}</Text>
         <Divider marginBlock='0.5rem' />
         <Stack direction='row' align='center'>
            {" "}
            <Heading size='lg' color='naranja' w='fit-content'>
               ${current.price}
            </Heading>
            <Divider orientation='vertical' marginInline='0.5rem' h='2.5rem' />
            <Text color='gray.400'>{current.discountPercentage}% OFF!</Text>
         </Stack>
         <Divider marginBlock='0.5rem' />
         <Stack>
            <Button>COMPRAR</Button>
         </Stack>
         <Tabs marginTop='2rem'>
            <TabList>
               <Tab color='negro' fontSize='sm'>
                  Rating
               </Tab>
               <Tab color='negro' fontSize='sm'>
                  Sobre el vendedor
               </Tab>
               <Tab color='negro' fontSize='sm'>
                  Información del envío
               </Tab>
            </TabList>
            <TabIndicator
               mt='-1.5px'
               height='1px'
               bg='azul'
               borderRadius='1px'
            />
            <TabPanels>
               <TabPanel>
                  <Stack direction='row' align='center'>
                     <StarRating rating={3} />
                     <Text color='gray.400'>3.2</Text>
                  </Stack>
               </TabPanel>
               <TabPanel>
                  <Stack>
                     <Stack direction='row'>
                        <Avatar></Avatar>
                        <Stack gap='0'>
                           <Text fontWeight='bold'>Juan Pablo Perez</Text>
                           <Text fontSize='small' color='gris'>
                              Perez Company SA
                           </Text>
                        </Stack>
                     </Stack>
                     <Divider marginBlock='0.5rem' />
                     <List spacing={3}>
                        <ListItem fontSize='sm'>
                           <ListIcon as={MdCheckCircle} color='green.500' />
                           Lorem ipsum.
                        </ListItem>
                        <ListItem fontSize='sm'>
                           <ListIcon as={MdCheckCircle} color='green.500' />
                           Lorem ipsum.
                        </ListItem>
                        <ListItem fontSize='sm'>
                           <ListIcon as={MdCheckCircle} color='green.500' />
                           Lorem ipsum.
                        </ListItem>
                     </List>
                  </Stack>
               </TabPanel>
               <TabPanel>
                  <p>three!</p>
               </TabPanel>
            </TabPanels>
         </Tabs>
      </GridItem>
   );
};

export default DetailDerecha;
