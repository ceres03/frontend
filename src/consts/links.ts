const links = [
  {
    name: "Produtos",
    url: "/produtos",
  },
  {
    name: "Carrinho",
    url: "/carrinho",
  },
  {
    name: "Sobre nós",
    url: "/#sobre",
  },
  {
    name: "Parceiros",
    url: "/#parceiros",
  },
  {
    name: "Login",
    url: "/login",
  },
  {
    name: "Cadastro",
    url: "/cadastro",
  },
];

const adminLinks = [
  {
    name: "Cadastrar Produto",
    url: "/cadastroProduto",
  },
  {
    name: "Categoria",
    url: "/categorias",
  },
  {
    name: "Cadastrar Categoria",
    url: "/cadastroCategoria",
  },
];

const cacheCategorias = [
  {
    id: 2,
    nome: "Verduras",
    descricao: "Folhas verdes saudáveis",
    produto: [
      {
        id: 12,
        nome: "Alface",
        preco: 3.5,
        quantidade: 10,
        descricao: "Folhas frescas verdes",
        imagem: "https://i.postimg.cc/nhDq2kNq/plantar-alface-750x422.jpg",
        usuario: {
          id: 1,
          nome: "RootRoot",
          email: "root@root.com",
          telefone: "11 9856732552",
          foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
          senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
        },
      },
    ],
  },
  {
    id: 3,
    nome: "Legumes",
    descricao: "Vegetais variados nutritivos",
    produto: [
      {
        id: 13,
        nome: "Cenoura",
        preco: 0.8,
        quantidade: 30,
        descricao: "Crocante e nutritiva",
        imagem:
          "https://i.postimg.cc/YqJdthHf/planta-ao-de-cenouras-7mboots.jpg",
        usuario: {
          id: 1,
          nome: "RootRoot",
          email: "root@root.com",
          telefone: "11 9856732552",
          foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
          senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
        },
      },
    ],
  },
  {
    id: 4,
    nome: "Tubérculos",
    descricao: "Raízes comestíveis nutritivas",
    produto: [
      {
        id: 14,
        nome: "Batata",
        preco: 0.7,
        quantidade: 35,
        descricao: "Versátil e saborosa",
        imagem:
          "https://i.postimg.cc/BZPhkTWQ/batatas-de-close-up-no-chao-1.jpg",
        usuario: {
          id: 1,
          nome: "RootRoot",
          email: "root@root.com",
          telefone: "11 9856732552",
          foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
          senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
        },
      },
    ],
  },
  {
    id: 7,
    nome: "Hortaliças",
    descricao: "Vegetais diversos comestíveis",
    produto: [
      {
        id: 16,
        nome: "Brócolis",
        preco: 4,
        quantidade: 10,
        descricao: "Nutritivo e verde",
        imagem: "https://i.postimg.cc/4xfQft0c/ativo-brocolis.jpg",
        usuario: {
          id: 1,
          nome: "RootRoot",
          email: "root@root.com",
          telefone: "11 9856732552",
          foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
          senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
        },
      },
    ],
  },
  {
    id: 8,
    nome: "Orgânicos",
    descricao: "Cultivados sem químicos",
    produto: [
      {
        id: 17,
        nome: "Tomate Orgânico",
        preco: 2,
        quantidade: 15,
        descricao: "Cultivado sem químicos",
        imagem:
          "https://i.postimg.cc/BQQjtgqJ/74fa7fdfafbfcd5399b193a454d223c2-1.jpg",
        usuario: {
          id: 1,
          nome: "RootRoot",
          email: "root@root.com",
          telefone: "11 9856732552",
          foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
          senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
        },
      },
    ],
  },
  {
    id: 1,
    nome: "Frutas",
    descricao: "Doces, frescas e saudáveis",
    produto: [
      {
        id: 11,
        nome: "Maça Fuji",
        preco: 1,
        quantidade: 20,
        descricao: "Doce e crocante",
        imagem:
          "https://i.postimg.cc/fLht8QYN/tipos-de-maa-destaque-960x625.jpg",
        usuario: {
          id: 1,
          nome: "RootRoot",
          email: "root@root.com",
          telefone: "11 9856732552",
          foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
          senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
        },
      },
    ],
  },
  {
    id: 5,
    nome: "Temperos",
    descricao: "Aromas e sabores frescos",
    produto: [
      {
        id: 15,
        nome: "Manjericão",
        preco: 2.5,
        quantidade: 10,
        descricao: "Aroma intenso fresco",
        imagem: "https://i.postimg.cc/CKK7NDH0/manjericao-organico.jpg",
        usuario: {
          id: 1,
          nome: "RootRoot",
          email: "root@root.com",
          telefone: "11 9856732552",
          foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
          senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
        },
      },
    ],
  },
];

const cacheProdutos = [
  {
    id: 11,
    nome: "Maça Fuji",
    preco: 1,
    quantidade: 20,
    descricao: "Doce e crocante",
    imagem: "https://i.postimg.cc/fLht8QYN/tipos-de-maa-destaque-960x625.jpg",
    categoria: {
      id: 1,
      nome: "Frutas",
      descricao: "Doces, frescas e saudáveis",
    },
    usuario: {
      id: 1,
      nome: "RootRoot",
      email: "root@root.com",
      telefone: "11 9856732552",
      foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
      senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
    },
  },
  {
    id: 12,
    nome: "Alface",
    preco: 3.5,
    quantidade: 10,
    descricao: "Folhas frescas verdes",
    imagem: "https://i.postimg.cc/nhDq2kNq/plantar-alface-750x422.jpg",
    categoria: {
      id: 2,
      nome: "Verduras",
      descricao: "Folhas verdes saudáveis",
    },
    usuario: {
      id: 1,
      nome: "RootRoot",
      email: "root@root.com",
      telefone: "11 9856732552",
      foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
      senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
    },
  },
  {
    id: 13,
    nome: "Cenoura",
    preco: 0.8,
    quantidade: 30,
    descricao: "Crocante e nutritiva",
    imagem: "https://i.postimg.cc/YqJdthHf/planta-ao-de-cenouras-7mboots.jpg",
    categoria: {
      id: 3,
      nome: "Legumes",
      descricao: "Vegetais variados nutritivos",
    },
    usuario: {
      id: 1,
      nome: "RootRoot",
      email: "root@root.com",
      telefone: "11 9856732552",
      foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
      senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
    },
  },
  {
    id: 14,
    nome: "Batata",
    preco: 0.7,
    quantidade: 35,
    descricao: "Versátil e saborosa",
    imagem: "https://i.postimg.cc/BZPhkTWQ/batatas-de-close-up-no-chao-1.jpg",
    categoria: {
      id: 4,
      nome: "Tubérculos",
      descricao: "Raízes comestíveis nutritivas",
    },
    usuario: {
      id: 1,
      nome: "RootRoot",
      email: "root@root.com",
      telefone: "11 9856732552",
      foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
      senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
    },
  },
  {
    id: 15,
    nome: "Manjericão",
    preco: 2.5,
    quantidade: 10,
    descricao: "Aroma intenso fresco",
    imagem: "https://i.postimg.cc/CKK7NDH0/manjericao-organico.jpg",
    categoria: {
      id: 5,
      nome: "Temperos",
      descricao: "Aromas e sabores frescos",
    },
    usuario: {
      id: 1,
      nome: "RootRoot",
      email: "root@root.com",
      telefone: "11 9856732552",
      foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
      senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
    },
  },
  {
    id: 16,
    nome: "Brócolis",
    preco: 4,
    quantidade: 10,
    descricao: "Nutritivo e verde",
    imagem: "https://i.postimg.cc/4xfQft0c/ativo-brocolis.jpg",
    categoria: {
      id: 7,
      nome: "Hortaliças",
      descricao: "Vegetais diversos comestíveis",
    },
    usuario: {
      id: 1,
      nome: "RootRoot",
      email: "root@root.com",
      telefone: "11 9856732552",
      foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
      senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
    },
  },
  {
    id: 17,
    nome: "Tomate Orgânico",
    preco: 2,
    quantidade: 15,
    descricao: "Cultivado sem químicos",
    imagem:
      "https://i.postimg.cc/BQQjtgqJ/74fa7fdfafbfcd5399b193a454d223c2-1.jpg",
    categoria: {
      id: 8,
      nome: "Orgânicos",
      descricao: "Cultivados sem químicos",
    },
    usuario: {
      id: 1,
      nome: "RootRoot",
      email: "root@root.com",
      telefone: "11 9856732552",
      foto: "https://acquaaroma.vteximg.com.br/arquivos/ids/168417/imagem-pessoal.jpg?v=638284798472570000",
      senha: "$2a$10$2p9bgEFYqen70Q/gSiUAH.kp4lpPe11AV0eh3pZaCHZ64RptcQ8yW",
    },
  },
];

export { links, adminLinks, cacheCategorias, cacheProdutos };
