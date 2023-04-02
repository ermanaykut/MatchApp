import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  midBlackShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default globalStyles;