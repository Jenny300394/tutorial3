import { StyleSheet, Text, View } from "react-native";
export default function App(){
  return (
    <View style={styles.contenedor}>
    <Text style={styles.texto}>Hola</Text>
    <Text style={styles.texto}>Mundo</Text>
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