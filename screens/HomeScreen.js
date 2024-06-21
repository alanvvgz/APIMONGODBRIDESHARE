import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ride.png')} style={styles.logo} />

      <Text style={styles.title}>RideShare</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#000000' }]}
        onPress={() => navigation.navigate('Contatos')}
      >
        <Text style={styles.buttonText}>Contatos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#000000' }]}
        onPress={() => navigation.navigate('Sobremim')}
      >
        <Text style={styles.buttonText}>Sobre Mim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#000' }]}
        onPress={() => navigation.navigate('Motorista')}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 15, // Spacing between image and title
  },
  title: {
    fontSize: 48,
    color: '#0A0A0A',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;