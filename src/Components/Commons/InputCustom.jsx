import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const InputCustom = ({ placeholder, icon, ...props }) => {
   return (
      <InputGroup>
         <InputLeftElement>
            <Icon as={icon} opacity={0.5} fontSize={25} color='gris' />
         </InputLeftElement>
         <Input
            placeholder={placeholder}
            bgColor='blanco'
            fontWeight="regular"
            color='negro'
            focusBorderColor='naranja'
            {...props}
         />
         ;
      </InputGroup>
   );
};

export default InputCustom;
