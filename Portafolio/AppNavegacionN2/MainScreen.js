// MainScreen.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const MainScreen = ({ navigation }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const goToNextSong = () => {
    navigation.navigate('Home');
  };

  const goToPreviousSong = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFC0CB', '#FFFFFF']} style={StyleSheet.absoluteFillObject} />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.songTitle}>Ojitos Lindos</Text>
      <Text style={styles.artistName}>Bad Bunny</Text>
     
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

export default MainScreen;
