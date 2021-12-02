import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

const Purchases = (): JSX.Element => {
  //TODO: CARDS COM A DATA, LOCAL E VALOR DA COMPRA
  //TODO: INPUT PARA BUSCAR PELA DATA,LOCAL E VALOR
  return (
    <View style={styles.container}>
      <Text>Minhas compras</Text>
    </View>
  );
};

export default Purchases;
