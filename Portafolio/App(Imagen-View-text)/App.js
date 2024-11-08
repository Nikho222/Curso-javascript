import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
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
      <StatusBar style="auto" 
      />
      <Image
        source={{uri: 'https://cdn.prod.website-files.com/5c2a9a234fdbba7439c48fa4/632cc665abbc286ce8f3e896_Screen%20Shot%202022-09-22%20at%204.11.09%20PM.webp'} } 
        style={styles.image2}
        resizeMode="contain"
      />
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
  image: {
    width: 300,  
    height: 300, 
    marginBottom: 50, 
  },
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: '600',
  },
  image2: {
    width: 200,  
    height: 200, 
    marginBottom: 10, 
  },
});
