import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  sortbtn: {
    width: width * 0.1,
    height: width * 0.1,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: width * 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.48,
    marginTop: width * 0.01,
  },
  iconsort: {
    color: '#888888',
    fontSize: RFValue(13),
    marginHorizontal: -width * 0.007,
  },
});
