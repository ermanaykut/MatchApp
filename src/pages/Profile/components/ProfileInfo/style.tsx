import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../constants/theme/color';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.95,
    height: 120,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    marginLeft: 10,
    width: 85,
    height: 85,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  infoContainer: {
    width: '67%',
  },
  text: {
    color: colors.white,
    fontSize: 15,
    marginVertical: 3,
  },
  icon: {
    position: 'absolute',
    right: 2,
    bottom: 5,
  },
});

export default styles;