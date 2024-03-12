import { Flex, Text, Button } from "@radix-ui/themes";
// import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <h1>Hello world</h1>
    </Flex>
  );
}
