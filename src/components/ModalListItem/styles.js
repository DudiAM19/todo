import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  modalcontainer: {
    width: width * 0.9,
    height: width * 0.99,
    backgroundColor: 'white',
    borderRadius: width * 0.03,
  },
  headermodal: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingHorizontal: width * 0.05,
  },
  titlemodal: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(16),
    color: '#111111',
  },
  iconclose: {
    color: '#A4A4A4',
    fontSize: RFValue(16),
  },
  formsection: {
    padding: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  titleform: {
    fontFamily: 'Poppins-SemiBold',
    color: '#111111',
    fontSize: RFValue(12),
  },
  form: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.05,
    fontFamily: 'Poppins-Regular',
    paddingTop: width * 0.035,
    fontSize: RFValue(14),
    marginVertical: width * 0.02,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.05,
    marginBottom: width * 0.02,
  },
  indicator: {
    width: width * 0.022,
    height: width * 0.022,
    backgroundColor: '#ED4C5C',
    borderRadius: width * 0.1,
    marginRight: width * 0.03,
  },
  textindicator: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(14),
    marginTop: width * 0.003,
  },
  icondropdown: {
    color: '#111111',
    fontSize: RFValue(14),
  },
});
