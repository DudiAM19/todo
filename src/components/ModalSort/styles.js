import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  sortlist: {
    flexDirection: 'row',
    height: width * 0.15,
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  iconsort: {
    color: '#16ABF8',
    fontSize: RFValue(15),
  },
  modaltitle: {
    fontFamily: 'Poppins-Regular',
    color: '#4A4A4A',
    marginTop: width * 0.006,
    marginHorizontal: width * 0.02,
    fontSize: RFValue(15),
  },
});
