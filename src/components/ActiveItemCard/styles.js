import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  card: {
    width: width / 2.35,
    height: width * 0.35,
    backgroundColor: 'white',
    elevation: 8,
    paddingHorizontal: width * 0.035,
    paddingVertical: width * 0.025,
    borderRadius: width * 0.03,
    shadowColor: 'rgba(0,0,0, 0.5)',
    marginVertical: width * 0.028,
    marginHorizontal: width * 0.028,
  },
  btntitle: {
    flex: 1,
  },
  titlecard: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: RFValue(12),
  },
  footercard: {
    flexDirection: 'row',
  },
  date: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(10),
    flex: 1,
    color: '#888888',
  },
  iconcard: {
    fontSize: RFValue(10),
    color: '#888888',
    marginTop: width * 0.005,
  },
});
