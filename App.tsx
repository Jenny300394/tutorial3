import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "./styles/GlobalStyles";
function App(){
  return (
    <View style={GlobalStyles.contenedor}>
    <Text style={GlobalStyles.texto}>Hola</Text>
    <Text style={GlobalStyles.texto}>Mundo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  contenedor:{
    marginTop: 300,
    marginLeft: 80
  },
  texto: {
    fontSize: 24
  }
})
export default App