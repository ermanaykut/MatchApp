import {StyleSheet} from 'react-native';
import colors from '../../../../../../constants/theme/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: '500',
    marginTop: 5,
    color: colors.white,
  },
  count: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  },
});

export default styles;