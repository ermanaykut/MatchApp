import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../constants/theme/color';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    marginTop: 10
  },
});

export default styles;