import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/theme/color';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  widget: {
    width: width * 0.95,
    height: 120,
    alignSelf: 'center',
    margin: 10,
  },
});

export default styles;