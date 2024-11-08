import React from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

 
  const showAlert = (message) => {
    Alert.alert("Alerta", message); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

    
      <View style={styles.buttonContainer}>
        <Button
          title="Volver al Main"
          onPress={() => navigation.navigate('Main')} 
        />
      </View>


      <View style={styles.space} />

     
      <View style={styles.buttonContainer}>
        <Button
          title="Mostrar Alerta"
          onPress={() => showAlert("Este es un mensaje de alerta, ten cuidado.")} 
        />
      </View>

  
      <View style={styles.space} />

 
      <TouchableHighlight
        style={styles.customButton}
        onPress={() => showAlert("Cuidado con esta alerta, puede explotar tu celular.")}
        underlayColor="#c1f0c1" 
      >
        <Text style={styles.buttonText}>Botón Personalizado</Text>
      </TouchableHighlight>


      <View style={styles.space} />

      <Pressable
        style={styles.pressableButton}
        onPress={() => showAlert("Con este botón inicias sesión con Google.")}
      >
        <AntDesign name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Iniciar con Google</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20, 
  },
  space: {
    height: 10, 
  },
  customButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '80%', 
    marginBottom: 20, 
  },
  pressableButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;
