import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base"

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


const Example = () => {
  return <HStack justifyContent="flex-start" space={2}>
      <Avatar bg="green.500" size="2xl" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
    </HStack>;
};


const Profile = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Profile</Text>
              <NativeBaseProvider>
                <Center flex={1} px="3">
                    <Example />
                </Center>
              </NativeBaseProvider>

                    <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                      Imię: Anita
                      Nazwisko: Świerszcz
                    </Text>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'Profile' })
      }}
    />
  </View>
)

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
