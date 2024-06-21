import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Sobremim = () => (
  <View style={styles.pagina2}>
    <Text style={styles.images}><Image style={styles.images1} /> </Text>
    <Text style={styles.textoPagina1}>
      Quem Somos?{"\n"}
      Nós somos estudantes do terceiro período do curso de Análise e Desenvolvimento de Sistemas do SENAC Pernambuco, envolvidos no projeto Embarque Digital.{"\n"}{"\n"}
      Este é um projeto para a disciplina de Desenvolvimento Mobile. O foco do nosso projeto é desenvolver um aplicativo em React Native + API CRUD em NodeJS com MongoDB, que facilitará o compartilhamento de caronas entre os colaboradores de uma empresa. 
      {"\n"}{"\n"}Alunos: Adonis Vinicius, Alan Vitor, Cícero Antônio, Esmeralda Freire, João Victor Santos, Luis Vinicius, Mateus Caik. 
    </Text>
  </View>
);

const styles = StyleSheet.create({
  pagina2: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F3EFEE', // Cor de fundo das páginas
    padding: 20,
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  images1: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  textoPagina1: {
    fontSize: 16,
    textAlign: 'left',
    padding: 20,
    color: '#000', // Cor do texto das páginas
  },
});

export default Sobremim;
