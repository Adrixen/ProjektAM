import React from "react";
import { Tooltip, Button, Center, NativeBaseProvider } from "native-base";

function Example() {
  return <Center>
      <Tooltip label="Click here to read more" openDelay={500}>
        <Button>More</Button>
      </Tooltip>
    </Center>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };

