import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  emptyactivitysection: {
    alignItems: 'center',
  },
  imgemptyactivity: {
    width: width * 0.82,
    height: width * 0.55,
    marginTop: width * 0.37,
  },
  imgemptyList: {
    width: width * 0.81,
    height: width * 0.65,
    marginTop: width * 0.3,
  },
  textemptyactivity: {
    marginTop: width * 0.095,
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(16),
    color: '#555555',
  },
});
