/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import {
   Stack,
   SimpleGrid,
   Image,
   Tabs,
   TabList,
   TabPanels,
   Tab,
   TabPanel,
   TabIndicator,
   GridItem,
} from "@chakra-ui/react";

const DetailIzquierda = ({ current }) => {
   return (
      <GridItem
         colSpan={3}
         bgColor='white'
         borderRadius={10}
         shadow='md'
         p='1rem'
         gap={3}
         as={Stack}
      >
         <Stack w='100%'>
            {" "}
            <Image
               borderRadius={9}
               outline='1px solid rgba(239, 239, 239, 1)'
               src={current.thumbnail}
            />
         </Stack>
         <SimpleGrid columns={5} gap={3}>
            <Image
               cursor='pointer'
               borderRadius={9}
               outline='1px solid rgba(239, 239, 239, 1)'
               src={current.thumbnail}
            />
            <Image
               cursor='pointer'
               borderRadius={9}
               outline='1px solid rgba(239, 239, 239, 1)'
               src={current.thumbnail}
            />
            <Image
               cursor='pointer'
               borderRadius={9}
               outline='1px solid rgba(239, 239, 239, 1)'
               src={current.thumbnail}
            />
            <Image
               cursor='pointer'
               borderRadius={9}
               outline='1px solid rgba(239, 239, 239, 1)'
               src={current.thumbnail}
            />
            <Image
               cursor='pointer'
               borderRadius={9}
               outline='1px solid rgba(239, 239, 239, 1)'
               src={current.thumbnail}
            />
         </SimpleGrid>

         <Stack w='100%'>
            <Tabs marginTop='1rem' w='100%'>
               <TabList>
                  <Tab color='negro' fontSize='sm'>
                     Descripción del producto
                  </Tab>
                  <Tab color='negro' fontSize='sm'>
                     Opiniones
                  </Tab>
                  <Tab color='negro' fontSize='sm'>
                     Preguntas al vendedor
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
                     <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>three!</p>
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Stack>
      </GridItem>
   );
};

export default DetailIzquierda;
