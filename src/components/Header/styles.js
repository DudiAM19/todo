import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  header: {
    height: width * 0.15,
    width: '100%',
    backgroundColor: '#16ABF8',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
  },
  chevronleft: {
    fontSize: RFValue(20),
    color: 'white',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: RFValue(16),
    marginTop: width * 0.009,
    marginHorizontal: width * 0.02,
  },
});
