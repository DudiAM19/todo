import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  modalcontainer: {
    flexDirection: 'row',
    width: width * 0.85,
    height: width * 0.15,
    backgroundColor: 'white',
    marginHorizontal: width * 0.025,
    borderRadius: width * 0.03,
    alignItems: 'center',
  },
  iconalert: {
    color: '#00A790',
    fontSize: RFValue(15),
    marginHorizontal: width * 0.03,
  },
  textalert: {
    fontFamily: 'Poppins-Regular',
    color: '#111111',
    fontSize: RFValue(15),
    marginTop: width * 0.009,
  },
});
