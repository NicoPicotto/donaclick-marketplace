/* eslint-disable react/prop-types */
import { Icon, HStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
   const stars = Array(5).fill(0);
   const fullStars = Math.floor(rating);

   return (
      <HStack spacing={1}>
         {stars.map((_, index) => (
            <Icon
               key={index}
               as={FaStar}
               color={index < fullStars ? "yellow.400" : "gray.300"}
               boxSize={6}
            />
         ))}
      </HStack>
   );
};

export default StarRating;
