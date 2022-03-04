import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: width * 0.052,
  },
  formsection: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginVertical: width * 0.052,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  form: {
    flex: 1,
  },
  textinput: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(16),
  },
  inputicon: {
    fontSize: RFValue(16),
    color: '#A4A4A4',
  },
  btnsection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.07,
  },
  btn: {
    marginVertical: width * 0.02,
    marginHorizontal: width * 0.03,
  },
  modalcontainer: {
    width: width * 0.6,
    height: width * 0.78,
    backgroundColor: 'white',
    borderRadius: width * 0.03,
    marginHorizontal: width * 0.15,
  },
});
