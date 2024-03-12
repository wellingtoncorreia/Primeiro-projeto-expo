import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';

export default function App() {
  return (

    <ScrollView>
      <View>
        <Image style={styles.imagemss}
          source={require('./assets/image6-1.png')}
        />
        <Text style={styles.texto}>Astronauta</Text>
        <Image style={styles.imagemss}
          source={{uri:'https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg'}}
        />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
    imagemss:{
      width:400,
      height:600
    },

    texto:{
      fontSize: 20,
      textAlign: "center",
      backgroundColor:"#000",
      color: "#f0f0f0",
      padding:30
    }
});
