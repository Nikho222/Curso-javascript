import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TarjetasManual = () => {
  return (
    <View style={estilos.contenedor}>
      {/* Tarjeta de Bad Bunny */}
      <View style={estilos.tarjeta}>
        <Image source={{ uri: 'https://www.billboard.com/wp-content/uploads/2023/10/bad-bunny-press-2023-billboard-1548.jpg' }} style={estilos.imagen} />
        <Text style={estilos.titulo}>Bad Bunny</Text>
        <Text style={estilos.subtitulo}>Artista de Reggaetón</Text>
        <Text style={estilos.descripcion}>
          Es un intérprete y compositor de música urbana puertorriqueño. Uno de los principales exponentes del panorama actual del reggaetón y trap.
        </Text>
      </View>

      {/* Tarjeta de Rosalía */}
      <View style={estilos.tarjeta}>
        <Image source={{ uri: 'https://phantom-elmundo.unidadeditorial.es/14e84df6324571ebf82f327ef631d999/resize/414/f/jpg/assets/multimedia/imagenes/2020/12/16/16081385853962.jpg' }} style={estilos.imagen} />
        <Text style={estilos.titulo}>Rosalía</Text>
        <Text style={estilos.subtitulo}>Artista de Pop y Flamenco</Text>
        <Text style={estilos.descripcion}>
          Cantante, compositora y productora española que ha revolucionado el flamenco fusionándolo con otros géneros contemporáneos.
        </Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: { 
    flex: 1,
     padding: 40, 
     backgroundColor: '#ffcccb' 
    },
  tarjeta: { 
    backgroundColor: '#fff',
     marginBottom: 20, 
     padding: 15,
    borderRadius: 10 
    },
  imagen: { 
    width: '100%',
     height: 150, 
     borderRadius: 10 
    },
  titulo: { 
    fontSize: 18,
     fontWeight: 'bold', 
     marginVertical: 5,
     textAlign: 'center'
    },
  subtitulo: { 
    fontSize: 16, 
    color: 'gray',
     textAlign: 'center'
   },
  descripcion: { 
    fontSize: 14,
     marginVertical: 10 
    },
});

export default TarjetasManual;
