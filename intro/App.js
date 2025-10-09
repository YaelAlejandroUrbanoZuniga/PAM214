//1. IMPORTS: Zona de Importaciones----------------------------------------------------
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2. MAIN: Zona de Componentes---------------------------------------------------------
export default function App() {
  const[contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador: {contador} </Text>
      <Button title= "Agregar" onPress={()=>setContador(contador + 1)}></Button>

      <Button title= "Quitar" onPress={()=>setContador(contador - 1)}></Button>

      <Button title= "Reiniciar" onPress={()=>setContador(0)}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

//3. STYLES: Zona de Estetica y Posicionamiento----------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

