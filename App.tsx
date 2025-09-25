import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "./styles/GlobalStyles";
class App extends Component {
  render (){
    return (
      <View style={GlobalStyles.contenedor}>
        <Text style = {GlobalStyles.texto}>Hola</Text>
        <Text style = {GlobalStyles.texto}>Mundo</Text>
      </View>
    )
  }
}
export default App