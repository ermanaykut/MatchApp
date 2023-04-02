import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../constants/theme/color';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.95,
    height: 120,
    backgroundColor: colors.secondary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default styles;