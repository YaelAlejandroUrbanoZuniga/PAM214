import { Text, StyleSheet, View, Button, Alert, SafeAreaView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';


export default function App() 
{
  const mostrarAlerta= ()=>
  {
    Alert.alert('');
  }

  const [showSplash, setShowSplash] = useState(true);
  useEffect(()=>
  {
    const timer = setTimeout(()=>
    {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  if (showSplash)
  {
    return(
      <View style={styles.showSplashStyle}>
        <Text style={styles.textSplashStyle}>BIENVENIDO A MI EXAMEN!!!</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={{
        uri:'',
      }}
      style={styles.fondoStyle}
      resizeMode='cover'
      >
        <View style={styles.overlay}>
          <Text style={styles.textosStyle}>Yael Alejandro Urbano Zuñiga</Text>
          <Text style={styles.textosStyle}>Estudiante en Ingenieria TIID</Text>
          <Text style={styles.textosStyle}>Tengo 19 años. Nací el 25 de Octubre del 2006</Text>
          <Text style={styles.textosStyle}>Me gusta el gym, los videojuegos y la música</Text>
          <Text style={styles.textosStyle}>124051558@upq.edu.mx ó yaelzu8@gmail.com</Text>
          <Text style={styles.textosStyle}>442-553-96-34</Text>
          <Button 
            title="EDITAR PERFIL"
            onPress={mostrarAlerta}
            color= '#1c6e0fff'
          />
        </View>
      </ImageBackground>
    </SafeAreaView>  
  )




  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}







const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showSplashStyle:
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSplashStyle:
  {
    fontSize: 24,
    color: '#1c6e0fff',
  },
  fondoStyle:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay:
  {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '85%',
  },

  textosStyle:
  {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  }
});
