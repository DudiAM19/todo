import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  btn: {
    flexDirection: 'row',
    width: width * 0.28,
    height: width * 0.1,
    backgroundColor: '#16ABF8',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconbtn: {
    color: 'white',
    fontSize: RFValue(15),
  },
  textbtn: {
    color: 'white',
    fontSize: RFValue(12),
    fontFamily: 'Poppins-SemiBold',
    marginTop: width * 0.01,
    marginLeft: 4,
  },
});
