import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    height: 200,
    marginBottom: 25,
  },
  carouselContainer: {
    alignItems: 'center',
  },
  imageCarousel: {
    width: 450,
    height: 200,
    marginRight: 10,
  },
  cardContainer: {
    marginBottom: 20,
    padding: 20,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    marginBottom: 10,
  },
  cardBackgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#fff',
    fontSize: 14,
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    borderRadius: 20,
    padding: 10,
  },
  menuItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 90,
    backgroundColor: '#007bff',
    borderRadius: 30,
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
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  Button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
    height: 50,
    width: 180,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
