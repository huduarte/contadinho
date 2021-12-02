import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

interface IButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

const Button = ({ title }: IButtonProps): JSX.Element => {
  return (
    <RectButton style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default Button;
