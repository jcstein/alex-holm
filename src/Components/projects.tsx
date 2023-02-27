import {
  Heading,
  Divider,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

export const Projects = () => {
  return (
    <VStack>
      <Heading size="lg" textAlign="center" pt="3">
        My work
      </Heading>
      <Image
        src="./1.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="1 description"
        pb="3"
      />
      <Image
        src="./2.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="2 description"
        pb="3"
      />
      <Image
        src="./3.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="3 description"
        pb="3"
      />
       <Image
        src="./4.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="4 description"
        pb="3"
      />
       <Image
        src="./5.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="5 description"
        pb="3"
      />
       <Image
        src="./6.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="6 description"
        pb="3"
      />
       <Image
        src="./7.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="7 description"
        pb="3"
      />
       <Image
        src="./8.png"
        width="90%"
        maxW="700px"
        rounded="2xl"
        alt="8 description"
        pb="3"
      />
      <Divider />
      <Heading size="md" textAlign="center" pt="3">
        Stay tuned on social media
      </Heading>
      <Button
        colorScheme="orange"
        size="lg"
        rightIcon={<FaInstagram />}
        onClick={() =>
          window.open("https://instagram.com/alexholmchairmaker", "_blank")
        }
        rounded="full"
      >
        Instagram
      </Button>
    </VStack>
  );
};
