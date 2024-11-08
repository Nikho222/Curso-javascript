import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MainScreen = ({ navigation }) => {
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
      <StatusBar style="auto" />
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')} 
      />
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
    color: 'green',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  image: {
    width: 300,  
    height: 300, 
    marginBottom: 20, 
  },
});

export default MainScreen;
