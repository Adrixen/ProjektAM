import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { Input, IconButton, Checkbox, Box, VStack, HStack, Heading, Icon, Center, NativeBaseProvider } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";

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
  const instState = [{
    title: "Zrób zdjęcie magazynu",
    isCompleted: true
  }, {
    title: "Spotkanie z prezesem o 18:00",
    isCompleted: false
  }, {
    title: "Sprawdź maile",
    isCompleted: false
  }, {
    title: "Zrób remanent",
    isCompleted: false
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");

  const addItem = title => {
    setList([...list, {
      title: title,
      isCompleted: false
    }]);
  };

  const handleDelete = index => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  const handleStatusChange = index => {
    const temp = list.map((item, itemI) => itemI !== index ? item : { ...item,
      isCompleted: !item.isCompleted
    });
    setList(temp);
  };

  return <Center w="100%">
      <Box maxW="300" w="100%">
        <Heading mb="2" size="md">
          Lista zadań
        </Heading>
        <VStack space={4}>
          <HStack space={2}>
            <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Dodaj zadanie" />
            <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
            addItem(inputValue);
            setInputValue("");
          }} />
          </HStack>
          <VStack space={2}>
            {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}>
                  <Text mx="2" strikeThrough={item.isCompleted} _light={{
                color: item.isCompleted ? "gray.400" : "coolGray.800"
              }} _dark={{
                color: item.isCompleted ? "gray.400" : "coolGray.50"
              }}>
                    {item.title}
                  </Text>
                </Checkbox>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
              </HStack>)}
          </VStack>
        </VStack>
      </Box>
    </Center>;
};



const Details = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
                <NativeBaseProvider>
                  <Center flex={1} px="3">
                      <Example />
                  </Center>
                </NativeBaseProvider>
      <Button
        title="Cofnij"
        color="white"
        backgroundColor={colors.pink}
        onPress={navigation.goBack}
      />
      <Text style={styles.title}> </Text>
    </View>
  )
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Details
