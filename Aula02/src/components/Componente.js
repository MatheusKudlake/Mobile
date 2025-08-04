import { View, Text, StyleSheet } from "react-native";

export default function() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.textoPrincipal}>Hello world!</Text>
      <Text style={estilos.textoSecundario}>Olá mundo!</Text>
    </View>
  )
  ;
}

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textoPrincipal: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
  },
  textoSecundario: {
    fontSize: 25,
    color: 'blue'
  }
})