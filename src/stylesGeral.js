// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   banner: {
//     height: 200,
//     marginBottom: 25,
//   },
//   carouselContainer: {
//     alignItems: 'center',
//   },
//   imageCarousel: {
//     width: 1000,
//     height: 100,
//     justifyContent: 'center'
//   },
//   cardContainer: {
//     marginBottom: 20,
//     padding: 20,
//   },
//   cardRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 20
//   },
//   card: {
//     width: '100%',
//     marginBottom: 10,
//   },
//   cardBackgroundImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
//   cardContent: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 10,
//   },
//   cardTitle: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cardDescription: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   menu: {
//     flexDirection: 'row',
//     backgroundColor: '#333',
//     paddingVertical: 30,
//     paddingHorizontal: 30,
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//     justifyContent: 'space-around',
//     borderRadius: 20,
//     padding: 10,
//   },
//   menuItem: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     textTransform: 'uppercase',
//   },
//   floatingButton: {
//     position: 'absolute',
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     right: 30,
//     bottom: 90,
//     backgroundColor: '#007bff',
//     borderRadius: 30,
//     elevation: 8,
//   },
//   floatingButtonText: {
//     color: 'white',
//     fontSize: 30,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//     borderRadius: 10,
//   },
//   Button: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 20,
//     marginBottom: 10,
//     height: 50,
//     width: 180,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 15,
//     textAlign: 'center',
//   },
// });

// export default styles;

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
  },
  imageCarousel: {
    padding: 0.2,
    width: width * 0.85,
    height: '80%',
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
    fontSize: width * 0.06,
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
    fontSize: width * 0.035,
    textAlign: 'center',
  },
});

export default styles;
