import React from "react";
import { AspectRatio, Box, Center, NativeBaseProvider } from "native-base";
import {Image} from 'react-native' ;


const Example = () => {
  return <AspectRatio ratio={{
    base: 3 / 4,
    md: 9 / 10
  }} height={{
    base: 200,
    md: 400
  }}>
      <Image resizeMode="cover" source={{
      uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    }} alt="Picture of a Flower" />
    </AspectRatio>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
