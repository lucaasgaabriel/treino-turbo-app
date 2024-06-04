import { StyleSheet } from 'react-native';

const stylesSobre = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  timeline: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#fff',
    marginTop: 20,
    paddingTop: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default stylesSobre; // Renomeando a exportação para stylesSobre
