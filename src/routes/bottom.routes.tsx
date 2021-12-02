import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Purchases from '../screens/Purchases';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomRoutes = (): JSX.Element => {
  return (
    <Navigator>
      <Screen name="Nova compra" component={Home} options={{ headerShown: false }} />
      <Screen name="Minhas compras" component={Purchases} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default BottomRoutes;
