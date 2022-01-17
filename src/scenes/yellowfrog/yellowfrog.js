import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { colors } from 'theme';

export default function App() {
const [state, setState] = useState();

function funkcja(){
const article = { content: 'React POST Request Example' };
axios.put('https://api.github.com/gists/070ed3670d5215d0d6b3347e67244053', article)
  .then(function (response) {
  setState(response.data.files["project_am"].content);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 }
  return (
    <View style={styles.container}>
      <ScrollView><Text>test</Text></ScrollView>
      <StatusBar style="auto" />
      <Button
      title="Wyslij"
      color="green"
      onPress={()=> {
      funkcja()}}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
