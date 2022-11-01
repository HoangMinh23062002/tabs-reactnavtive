import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
  },
  slide: {
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'center',
    borderRadius: 20,
  },
  sliderContent: {
    position: 'absolute',
  },
  contentWord: {
    color: '#1987FB',
    fontSize: 25,
    marginTop: 30,
    marginLeft: 35,
    fontWeight: 'bold',
  },
  contentDetail: {
    marginTop: 5,
    marginLeft: 35,
    fontSize: 15,
  },
  productTitle: {
    marginLeft: 15,
    fontSize: 20,
    color: '#090F47',
    fontWeight: '400',
  },
  images: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 10,
  },
  imagesProduct: {
    marginHorizontal: 13,
  },
  imagesMedicine: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imagesTitle: {
    fontFamily: 'Overpass',
    fontWeight: 'bold',
    fontSize: 13,
    width: '100%',
    height: '30%',
    backgroundColor: '#F5F7FA',
    textAlign: 'center',
    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  chainTitle: {
    marginTop: -75,
    marginLeft: 15,
    fontSize: 20,
    color: '#090F47',
    fontWeight: '400',
  },
  chainProduct: {
    marginTop: -70,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chainDetail: {},
});

export default styles;