import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  banner: {
    height: height * 0.2,
    marginBottom: height * 0.025,
  },
  carouselContainer: {
    alignItems: 'center',
    paddingLeft: width * 0.07,
    marginTop: height * 0.09,
  },
  imageCarousel: {
    padding: 0.1,
    width: width * 0.85,
    height: '30%',
    aspectRatio: 15 / 2,
  },
  cardContainer: {
    marginBottom: height * 0.03,
    padding: width * 0.05,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: height * 0.02
  },
  card: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  cardBackgroundImage: {
    width: '100%',
    height: height * 0.2,
    resizeMode: 'cover',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: width * 0.025,
  },
  cardTitle: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#fff',
    fontSize: width * 0.035,
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: height * 0.04,
    paddingHorizontal: width * 0.03,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderRadius: width * 0.05,
    padding: width * 0.01,
  },
  menuItem: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  floatingButton: {
    position: 'absolute',
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    right: width * 0.03,
    bottom: height * 0.09,
    backgroundColor: '#007bff',
    borderRadius: width * 0.05,
    elevation: 8,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.9,
    padding: width * 0.05,
    backgroundColor: 'white',
    borderRadius: width * 0.02,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
  },
  input: {
    width: '100%',
    height: height * 0.04,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: height * 0.01,
    padding: width * 0.025,
    borderRadius: width * 0.02,
  },
  Button: {
    backgroundColor: '#007bff',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.05,
    marginBottom: height * 0.01,
    height: height * 0.05,
    width: width * 0.18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;