import {StyleSheet} from 'react-native';
import colors from '../../constants/theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
  },
  flatlist: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;