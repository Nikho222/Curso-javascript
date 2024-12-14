import React from 'react'; 
import { ScrollView, View, StyleSheet, Linking, Text } from 'react-native';
import { Card, Paragraph, Button, Avatar } from 'react-native-paper';

const Tarjetas = () => {
  const IconoIzquierdo = (props) => <Avatar.Icon {...props} icon="music" />;

  return (
    <ScrollView contentContainerStyle={estilos.scrollContainer}>
      <View style={estilos.contenedor}>
        <Card style={estilos.tarjeta}>
          <Card.Title
            title="Artista N°1"
            subtitle="Género Músical: Reggaeton, Trap"
            left={IconoIzquierdo}
            titleStyle={{ textAlign: 'left' }}
            subtitleStyle={{ textAlign: 'left' }}
          />
        
          <Text style={estilos.textoArtista}>Bad Bunny</Text>
          <Card.Cover source={{ uri: 'https://phantom-elmundo.unidadeditorial.es/886b9269c5ba66789412e3783c6a2e5b/crop/82x0/1227x765/resize/828/f/jpg/assets/multimedia/imagenes/2020/05/10/15891358002692.jpg' }} />
          <Card.Content>
            <Paragraph style={{ textAlign: 'justify' }}>
              Es un intérprete y compositor de música urbana puertorriqueño. Uno de los principales exponentes del panorama actual del reggaetón y trap.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => Linking.openURL('https://open.spotify.com/intl-es/artist/4q3ewBCX7sLwd24euuV69X?si=LBqUC2BSRxKpEBE9xYkerw')}>Spotify</Button>
            <Button onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Bad_Bunny')}>Más Info</Button>
          </Card.Actions>
        </Card>

        <Card style={estilos.tarjeta}>
          <Card.Title
            title="Artista N°2"
            subtitle="Género Músical: Pop, Flamenco"
            left={IconoIzquierdo}
            titleStyle={{ textAlign: 'left' }}
            subtitleStyle={{ textAlign: 'left' }}
          />
            <Text style={estilos.textoArtista}>Rosalía</Text>
          <Card.Cover source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/rosalia-6419d907ed8cb.jpg' }} />
          <Card.Content>
            <Paragraph style={{ textAlign: 'justify' }}>
              Cantante, compositora y productora española que ha revolucionado el flamenco fusionándolo con otros géneros contemporáneos.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => Linking.openURL('https://open.spotify.com/intl-es/artist/7ltDVBr6mKbRvohxheJ9h1?si=tOygYuONQGe2Hd1IeZrSHQ')}>Spotify</Button>
            <Button onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Rosal%C3%ADa_(cantante)')}>Más Info</Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  scrollContainer: {
    flexGrow: 4,
  },
  contenedor: { 
    flex: 4, 
    padding: 20, 
    backgroundColor: '#f5f5f5' 
  },
  tarjeta: { 
    marginBottom: 20 
  },
  textoArtista: {
    fontSize: 20, 
    fontWeight: 'black', 
    color: 'black', 
    textAlign: 'left', 
    marginVertical: 5, 
    marginLeft: 20,
  }
});

export default Tarjetas;
