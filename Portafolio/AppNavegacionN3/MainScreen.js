import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inicio</Text>
      <StatusBar style="auto" />

      <View style={styles.iconContainer}>
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 20,
  },
  iconButton: {
    margin: 10, 
  }
});

export default MainScreen;
