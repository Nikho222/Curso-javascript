import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const goToNextSong = () => {
    navigation.navigate('Main');
  };

  const goToPreviousSong = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4C0066', '#FFFFFF']} style={StyleSheet.absoluteFillObject} />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpSaVmb8jH9x_z7WM18iPuFCdp9Rg24NMyQ&s' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.songTitle}>Hecha Pa Mi</Text>
      <Text style={styles.artistName}>Bozan</Text>
     
      <TouchableOpacity onPress={toggleLike} style={styles.heartButton}>
        <Ionicons name={liked ? 'heart' : 'heart-outline'} size={40} color={liked ? 'red' : 'grey'} />
      </TouchableOpacity>
      
      <StatusBar style="auto" />
      <View style={styles.controls}>
        <TouchableOpacity onPress={goToPreviousSong}>
          <Ionicons name="play-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Detener canción')}>
          <Ionicons name="pause-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextSong}>
          <Ionicons name="play-forward-outline" size={30} color="black" />
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
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 20,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 20,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  artistName: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 20,
  },
  heartButton: {
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 20,
  },
});

export default HomeScreen;
