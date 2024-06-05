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
  Title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  timelineHeader: {
    backgroundColor: '#333',
    padding: 10,
    marginTop: 20,
  },
  timelineHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
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
    alignItems: 'center',
  },
  timelineIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#808080',
    borderRadius: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineIcon02: {
    width: 150,
    height: 20,
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
  contactInfo: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
    marginTop: 100,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#ddd', // Cor de fundo temporária para o mapa
    marginRight: 20,
    height: 200,
  },
  contactDetails: {
    flex: 1,
  },
  contactText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default stylesSobre;
