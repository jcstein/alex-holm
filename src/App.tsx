import { Avatar, VStack, Link, Divider, Text } from "@chakra-ui/react";
import { Buttons } from "./Components/buttons";
import { About } from "./Components/about";
import { Projects } from "./Components/projects";

function App() {
  return (
    <div>
      <Buttons />
      <VStack p="7">
        <About />
        <Divider />
        <Projects />
        <Divider pt="3"/>
        <Link href="/" pt="8">
          <Avatar src="/alex-holm.png" mx="auto" size="md" />
        </Link>
        <Text>
          This website is{" "}
          <Link href="https://github.com/jcstein/alex-holm" isExternal>
            open-source
          </Link>
        </Text>
      </VStack>
    </div>
  );
}

export default App;
