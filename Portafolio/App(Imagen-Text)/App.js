import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#FFFFFF', '#00FF00']}
        style={StyleSheet.absoluteFillObject} 
      />
      <Text style={styles.text}>Municipalidad de Quinchao</Text>
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
  },
  
  text: {
    color: 'green',
    fontSize: 20, 
    fontWeight: '600', 
  }
});

