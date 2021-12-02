import { StyleSheet } from 'react-native';
import { colors, fontsFamily } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.green,
    
    height: 60,
    
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 6
  },
  title: {
    fontSize: 16,
    fontFamily: fontsFamily.regular400,
    color: colors.light.white
  }
}) 