import React from "react";
import {View, Text, Button, Image, StyleSheet} from 'react-native';
const PantallaInicio =({navigation}) => {
  return (
    <View>
    <Text>¡Bienvenido a la pantallade inicio! </Text>
    
    <Image
    source={require('jaguar.jpg')}
    style={styles.Image}
    />

    <Button
    title="Ir al detalle"
    onPress={() => navigation.navigate('Detalle.tsx')}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    justifyContent: 'center',
    alingItems: 'Center',
  },

  Image:{
    widht: 100,
    Height: 150,
    reasizeMode: "contain",
  },

})

export default PantallaInicio;