
carrosService = {};

carrosService.get = async (req, res) => {
  return res.status(200).json({
    message: 'Lista de carros!',
    carros: 
    [
      {  
        "marca":"Chevrolet",
        "modelo":"Agile LT 1.4 MPFI 8V flex",
        "valor":21500,
        "unidadesEmEstoque":5,
        "ano":2010,
        "categoria":"carro",
     },
     {  
        "marca":"Dodge",
        "modelo":"Dakota Durango SLT 5.2 4x4 V8",
        "ano":1998,
        "valor":28.470,
        "unidadesEmEstoque":2,
        "categoria":"carro",
  
     },
     {  
        "marca":"Fiat",
        "modelo":"Idea Advent./ Adv.LOCKER 1.8 mpi Flex 5p",
        "ano":2016,
        "valor":50414,
        "unidadesEmEstoque":2,
        "categoria":"carro",
  
     }
    ]
});
}

carrosService.add = async (req, res) => {

  const data = req.body;

  return res.status(200).json({
    message: "Carro cadastrado com sucesso",
    data
  })
}

module.exports = carrosService;
