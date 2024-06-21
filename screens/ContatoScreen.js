import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contatos = () => (
  <View style={styles.pagina}>
    <Text style={styles.textoPagina}>
      {"\n"}O Aplicativo de Caronas para o Trabalho (RideShare) é uma ferramenta prática e inovadora destinada a transformar a maneira como os colaboradores se deslocam até seus locais de trabalho. {"\n"}
      Com a utilização deste aplicativo, os usuários podem encontrar colegas que façam rotas similares e assim, compartilhar viagens de carro, o que não apenas economiza em custos de transporte, como também contribui para a redução da emissão de poluentes e congestionamentos nas estradas.{"\n"}
      {"\n"} Cadastre sua rota agora, abrindo o menu e clicando em "cadastrar sua rota"!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  pagina: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F3EFEE', // Cor de fundo das páginas
    padding: 20,
  },
  textoPagina: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000', // Cor do texto das páginas
  },
});

export default Contatos;
