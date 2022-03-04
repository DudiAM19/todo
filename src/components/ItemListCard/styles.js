import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  itemlist: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: width * 0.14,
    borderRadius: 12,
    paddingHorizontal: width * 0.06,
    elevation: 5,
    shadowColor: 'rgba(0,0,0, 0.5)',
    marginVertical: width * 0.025,
    marginHorizontal: width * 0.02,
  },
  checkbox: {
    height: 12,
    width: 12,
    borderWidth: 1,
    borderColor: '#C7C7C7',
  },
  indicator: priority => ({
    width: 5,
    height: 5,
    backgroundColor:
      priority === 'very-high'
        ? '#ED4C5C'
        : priority === 'high'
        ? '#F8A541'
        : priority === 'medium'
        ? '#00A790'
        : priority === 'low'
        ? '#00A790'
        : '#8942C1',
    borderRadius: width * 0.1,
    marginHorizontal: width * 0.03,
  }),
  texttitleitem: {
    fontFamily: 'Poppins-Medium',
    color: '#111111',
    marginRight: width * 0.03,
    fontSize: RFValue(14),
    marginTop: width * 0.005,
  },
  btniconedit: {
    flex: 1,
  },
  iconedit: {
    fontSize: RFValue(14),
    color: '#C4C4C4',
  },
  icontrash: {
    fontSize: RFValue(14),
    color: '#888888',
  },
});
