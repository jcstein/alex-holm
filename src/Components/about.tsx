import { Avatar, Heading, Text, Link, Divider, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <VStack>
      <Heading pb="3">Alex Holm Chairmaker</Heading>
      <Avatar src="/alex-holm.png" mx="auto" size="2xl" />
      <Heading size="md" pb="3" textAlign="center" pt="3">
        Thank you for stopping by my site 😄
      </Heading>
      <Text textAlign="center">
        I am a classic windsdor chairmaker.
      </Text>
      <Divider />
      <Heading size="lg" textAlign="center" pt="3">
        About me
      </Heading>
      <Text textAlign="center">
        I&#39;m currently a [role] at
        {" "}<Link href="https://celestia.org" isExternal>
          [company]
        </Link>. We're [doing this].
      </Text>
      <Text textAlign="center">
        I&#39;m also an interested in{" "}
        <Link href="https://developerdao.com" isExternal>
          [this]
        </Link>{" "}
        and{" "}
        <Link href="https://peeple.work" isExternal>
          [that]
        </Link>.
      </Text>
      <Text textAlign="center">
        Previously, I studied at{" "}
        <Link href="https://scad.edu" isExternal>
          SCAD
        </Link>.
      </Text>
    </VStack>
  );
};
