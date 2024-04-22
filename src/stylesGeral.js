const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  banner: {
    height: 200,
    marginBottom: 20,
  },
  carouselContainer: {
    alignItems: 'center',
  },
  imageCarousel: {
    width: 300,
    height: 200,
    marginRight: 10,
  },
  cardContainer: {
    marginBottom: 20,
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
    height: 100, // Defina a altura desejada
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
    justifyContent: 'space-around',
    backgroundColor: '#333', // Cor de fundo escura
    paddingVertical: 15, // Espaçamento vertical
  },
  menuItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto
    textTransform: 'uppercase', // Transforma o texto em maiúsculas
  },
};


export default styles;
