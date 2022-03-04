import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headercontent: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.052,
    marginTop: width * 0.07,
  },
  textactivity: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(16),
    flex: 1,
    color: 'black',
  },
  content: {
    width: width,
    marginTop: width * 0.08,
    alignItems: 'center',
  },
});
