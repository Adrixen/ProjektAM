import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
const image = { uri: "https://reactjs.org/logo-og.png" };
var xmlHttp = null;

function GetCustomerInfo()
{
    var CustomerNumber = document.getElementById( "TextBoxCustomerNumber" ).value;
    var Url = "GetCustomerInfoAsJson.aspx?number=" + CustomerNumber;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open( "GET", Url, true );
    xmlHttp.send( null );
}

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>backfrog</Text>

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;
