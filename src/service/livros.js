
livrosService = {};

livrosService.get = async (req, res) => {
  return res.status(200).json({
    message: 'Lista de livros!',
    livros: 
    [
      {
        "titulo": "Primeiros passos com a linguagem Rust",
        "categoria": "Programação",
        "isbn": "978-85-7522-683-4",
        "ano": "2018",
        "paginas": "312",
        "preco": 69,
        "estoque": "Disponível também em formato ebook"
      },
      {
        "titulo": "Programação em Baixo Nível",
        "categoria": "Hardware &amp; Robótica",
        "isbn": "978-85-7522-667-4",
        "ano": "2018",
        "paginas": "576",
        "preco": 120,
        "estoque": "Disponível também em formato ebook"
      },
      {
        "titulo": "Introdução à linguagem Lua",
        "categoria": "Programação",
        "isbn": "978-85-7522-668-1",
        "ano": "2018",
        "paginas": "176",
        "preco": 52,
        "estoque": "Disponível também em formato ebook"
      }
    ]
});
}

livrosService.add = async (req, res) => {

  const data = req.body;

  return res.status(200).json({
    message: "Livro cadastrada com sucesso",
    data
  })
}

module.exports = livrosService;
