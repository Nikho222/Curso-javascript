import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {

  const showAlert = (message) => {
    Alert.alert("Alerta", message);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#00FF00']}
        style={StyleSheet.absoluteFillObject}
      />

      <Image
        source={require('./assets/logoneutro2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Municipalidad de Quinchao</Text>
      
  
      <Button
        title="Mostrar Alerta"
        onPress={() => showAlert("Este es un mensaje de alerta, ten cuidado.")}
      />

    
      <TouchableHighlight
        style={styles.customButton}
        onPress={() => showAlert("Cuidado con esta alerta, puede explotar tu celular.")}
        underlayColor="#c1f0c1" 
      >
        <Text style={styles.buttonText}>Botón Personalizado</Text>
      </TouchableHighlight>

      <Pressable
        style={styles.pressableButton}
        onPress={() => showAlert("Con este botón inicias sesión con google.")}
      >
        <AntDesign name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Iniciar con Google</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  pressableButton: {
    flexDirection: 'row', 
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    marginRight: 10, 
  },
});

