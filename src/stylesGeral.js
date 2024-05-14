const styles = {
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
    height: 200, // Defina a altura desejada
    resizeMode: 'cover', // Garante que a imagem preencha todo o espaço do contêiner
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adicione um fundo escuro para melhorar a legibilidade do texto
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
    justifyContent: 'space-between', // Alterado de 'space-between' para 'space-around' para espaçar uniformemente os itens
    borderRadius: 20, // Adicionado para arredondar as bordas do menu
    padding: 10,
   
  },
  menuItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },  
};


export default styles;
