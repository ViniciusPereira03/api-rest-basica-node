
produtosService = {};

produtosService.get = async (req, res) => {
  return res.status(200).json({
    message: 'Lista de produtos!',
    produtos: 
    [
      {
        "id":2,
        "name":"Avental",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
      },
      {
        "id":3,
        "name":"Touca",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
      },
      {
        "id":4,
        "name":"Fronha",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
      },
      {
        "id":5,
        "name":"Embalagem",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
      }
    ]
});
}

produtosService.add = async (req, res) => {

  const data = req.body;

  return res.status(200).json({
    message: "Produto cadastrado com sucesso",
    data
  })
}

module.exports = produtosService;
