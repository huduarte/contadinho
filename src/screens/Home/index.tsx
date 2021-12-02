import React from 'react';

import { View, Text } from 'react-native';
import Button from '../../components/Button';

import { styles } from './styles';

const Home = (): JSX.Element => {
  //TODO: DESCRIÇÃO SOBRE APLICATIVO
  //TODO: NAVEGAÇÃO PARA TELA DE COMPRAS
  return (
    <View style={styles.container}>
      <Text>CONTADINHO</Text>
      <Button title="Iniciar nova compra" />
    </View>
  );
};

export default Home;
