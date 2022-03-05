import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  modalcontainer: {
    width: width * 0.9,
    height: width * 0.85,
    backgroundColor: 'white',
    borderRadius: width * 0.03,
    alignItems: 'center',
    paddingVertical: width * 0.1,
    // paddingHorizontal: width * 0.2
  },
  iconwarning: {
    color: '#ED4C5C',
    fontSize: RFValue(45),
  },
  textsection: {
    // flexDirection: 'row',
    marginVertical: width * 0.09,
    width: width * 0.7,
    alignItems: 'center',
  },
  textwarning: {
    color: '#111111',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  textboldwarning: {
    color: '#111111',
    fontFamily: 'Poppins-Bold',
  },
  btnsection: {
    flexDirection: 'row',
  },
  btncancel: {
    width: width * 0.28,
    height: width * 0.13,
    backgroundColor: '#F4F4F4',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  textcancel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(16),
    color: '#4A4A4A',
  },
  btndelete: {
    width: width * 0.28,
    height: width * 0.13,
    backgroundColor: '#ED4C5C',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    marginHorizontal: width * 0.02,
    alignItems: 'center',
  },
  textdelete: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(16),
    color: 'white',
  },
});
