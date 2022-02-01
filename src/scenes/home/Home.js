import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { Alert, VStack, HStack, IconButton, CloseIcon, Box, Center, NativeBaseProvider } from "native-base";

function Example() {
  return <Center>
      <Alert minW="90%" maxW="90%" status="info" colorScheme="gray">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} alignItems="center" justifyContent="center">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                Gratulacje!
              </Text>
            </HStack>

          </HStack>
          <Box pl="6" _text={{
          color: "coolGray.600"
        }}>
            Otrzymałeś pochwałę! Do premii brakuje Ci 10pkt.
          </Box>
        </VStack>
      </Alert>
    </Center>;
}

function Example1() {
  return <Center>
      <Alert minW="90%" maxW="90%" status="info" colorScheme="gray">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} alignItems="center" justifyContent="center">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                Nie zapomnij!
              </Text>
            </HStack>

          </HStack>
          <Box pl="6" _text={{
          color: "coolGray.600"
        }}>
            Jutro o 18:00 jest ważne spotkanie z prezesem firmy.
          </Box>
        </VStack>
      </Alert>
    </Center>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}> </Text>
    <Text style={styles.title}>Powiadomienia</Text>
 <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
                <Example1 />
            </Center>
          </NativeBaseProvider>
              <Button
                title="Szczegóły"
                color="white"
                backgroundColor={colors.lightPurple}
                onPress={() => {
                  navigation.navigate('Details', { from: 'Home' })
                }}
              />
                  <Text style={styles.title}> </Text>
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
