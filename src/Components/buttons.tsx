import { IconButton, Flex, HStack } from "@chakra-ui/react";
import {
  FaMoon,
  FaSun,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

export const Buttons = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify="end">
      <HStack pt="3" pr="5">
         <IconButton
          colorScheme="orange"
          onClick={() =>
            window.open("malto:alexholmchairmaker@gmail.com", "_blank")
          }
          aria-label={`Connect with Alex Holm by email`}
        >
          <FaEnvelope />
        </IconButton>
        <IconButton
          colorScheme="orange"
          onClick={() =>
            window.open("https://instagram.com/alexholmchairmaker", "_blank")
          }
          aria-label={`Follow Alex Holm on Instagram`}
        >
          <FaInstagram />
        </IconButton>
        <IconButton
          onClick={toggleColorMode}
          aria-label={`Switch from ${colorMode} mode`}
        >
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </IconButton>
      </HStack>
    </Flex>
  );
};
