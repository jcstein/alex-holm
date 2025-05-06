import {
  Heading,
  Divider,
  VStack,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import "../gridStyles.css";
import { FaInstagram } from "react-icons/fa";

const ImageGrid = () => {
  // Create array of image sources with size classes
  const images = [
    { src: "./1.png", alt: "1 description", className: "grid-item grid-item-medium" },
    { src: "./3.png", alt: "3 description", className: "grid-item grid-item-large" },
    { src: "./6.png", alt: "6 description", className: "grid-item grid-item-small" },
    { src: "./2.png", alt: "2 description", className: "grid-item grid-item-medium" },
    { src: "./5.png", alt: "5 description", className: "grid-item grid-item-large" },
    { src: "./4.png", alt: "4 description", className: "grid-item grid-item-small" },
    { src: "./7.png", alt: "7 description", className: "grid-item grid-item-medium" },
    { src: "./8.png", alt: "8 description", className: "grid-item grid-item-large" },
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={image.className}
        >
          <Image
            src={image.src}
            width="100%"
            height="100%"
            objectFit="cover"
            rounded="2xl"
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export const Projects = () => {
  return (
    <VStack spacing={6} width="100%">
      <Heading size="lg" textAlign="center" pt="3">
        My work
      </Heading>
      
      <ImageGrid />
      
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
