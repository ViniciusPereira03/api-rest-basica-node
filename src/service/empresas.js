
empresasService = {};

empresasService.get = async (req, res) => {
  return res.status(200).json({
    message: 'Lista de empresas!',
    empresas: 
    [
      {
        "nome": "Rosângela e Vitória Buffet Ltda",
        "cnpj": "98.569.066/0001-00",
        "inscricao_estadual": "125.760.542.699",
        "data_abertura": "08/11/2019",
        "cep": "17511-263",
        "endereco": "Praça Ricardo Gracindo"
      },
      {
        "nome": "Márcia e Caroline Doces & Salgados Ltda",
        "cnpj": "45.950.188/0001-77",
        "inscricao_estadual": "354.713.355.315",
        "data_abertura": "23/10/2019",
        "cep": "15706-208",
        "endereco": "Rua dos Sabiás"
      },
      {
        "nome": "Carla e Isabel Publicidade e Propaganda ME",
        "cnpj": "16.599.823/0001-15",
        "inscricao_estadual": "418.545.660.926",
        "data_abertura": "10/09/2019",
        "cep": "14711-014",
        "endereco": "Rua Manoel João Bastos"
      }
    ]
});
}

empresasService.add = async (req, res) => {

  const data = req.body;

  return res.status(200).json({
    message: "Empresa cadastrada com sucesso",
    data
  })
}

module.exports = empresasService;
