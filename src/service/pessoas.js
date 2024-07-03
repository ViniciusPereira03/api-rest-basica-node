
pessoasService = {};

pessoasService.get = async (req, res) => {
  return res.status(200).json({
    message: 'Lista de pessoas!',
    pessoas: 
    [
      {
        "nome": "Natália Cristiane Lívia Aragão",
        "idade": 68,
        "cpf": "489.591.511-57",
        "rg": "45.833.906-4",
        "data_nasc": "11/01/1956",
        "sexo": "Feminino",
        "signo": "Capricórnio",
        "mae": "Carolina Bianca Alice",
        "pai": "Caio Luan Breno Aragão",
        "email": "nataliacristianearagao@cteep.com.br",
        "senha": "o8jbpFRZZi",
        "cep": "89234-015",
        "endereco": "Rua Antônio João de Borba",
        "numero": 771,
        "bairro": "Paranaguamirim",
        "cidade": "Joinville",
        "estado": "SC",
        "telefone_fixo": "(47) 3683-1989",
        "celular": "(47) 99211-1246",
        "altura": "1,60",
        "peso": 72,
        "tipo_sanguineo": "A+",
        "cor": "amarelo"
      },
      {
        "nome": "Nina Teresinha Nascimento",
        "idade": 61,
        "cpf": "057.781.444-31",
        "rg": "11.786.760-3",
        "data_nasc": "26/05/1963",
        "sexo": "Feminino",
        "signo": "Gêmeos",
        "mae": "Marina Rayssa Emanuelly",
        "pai": "Kauê Diogo Nascimento",
        "email": "nina_teresinha_nascimento@studiodeideias.com",
        "senha": "jOLK6ZNDGN",
        "cep": "65082-280",
        "endereco": "Avenida José Sarney",
        "numero": 567,
        "bairro": "Vila Ariri",
        "cidade": "São Luís",
        "estado": "MA",
        "telefone_fixo": "(98) 2702-0212",
        "celular": "(98) 98236-8024",
        "altura": "1,83",
        "peso": 52,
        "tipo_sanguineo": "AB+",
        "cor": "azul"
      },
      {
        "nome": "Benedita Kamilly Assunção",
        "idade": 29,
        "cpf": "883.858.877-50",
        "rg": "10.169.428-3",
        "data_nasc": "18/04/1995",
        "sexo": "Feminino",
        "signo": "Áries",
        "mae": "Clara Rosângela",
        "pai": "Vinicius Augusto Assunção",
        "email": "benedita.kamilly.assuncao@droganews.com.br",
        "senha": "ohPY9c3fyw",
        "cep": "78045-190",
        "endereco": "Rua João Bento",
        "numero": 608,
        "bairro": "Bosque",
        "cidade": "Cuiabá",
        "estado": "MT",
        "telefone_fixo": "(65) 2570-3662",
        "celular": "(65) 98632-2738",
        "altura": "1,81",
        "peso": 61,
        "tipo_sanguineo": "A+",
        "cor": "amarelo"
      },
      {
        "nome": "Rafaela Isabelly Ferreira",
        "idade": 59,
        "cpf": "320.535.786-88",
        "rg": "18.361.585-2",
        "data_nasc": "17/04/1965",
        "sexo": "Feminino",
        "signo": "Áries",
        "mae": "Alice Natália Sebastiana",
        "pai": "Henrique Caleb Ferreira",
        "email": "rafaela_ferreira@gracomonline.com.br",
        "senha": "9C9mT2L10d",
        "cep": "79093-570",
        "endereco": "Rua Beni",
        "numero": 403,
        "bairro": "Jardim Santa Emília",
        "cidade": "Campo Grande",
        "estado": "MS",
        "telefone_fixo": "(67) 2728-9089",
        "celular": "(67) 99667-8957",
        "altura": "1,73",
        "peso": 87,
        "tipo_sanguineo": "O-",
        "cor": "preto"
      },
      {
        "nome": "Emanuelly Luna Ana Campos",
        "idade": 57,
        "cpf": "045.322.501-29",
        "rg": "37.912.606-0",
        "data_nasc": "03/04/1967",
        "sexo": "Feminino",
        "signo": "Áries",
        "mae": "Priscila Eduarda",
        "pai": "Nicolas Samuel Vitor Campos",
        "email": "emanuelly_campos@effem.com",
        "senha": "JWg4nDslZR",
        "cep": "57600-430",
        "endereco": "Rua Antônio Capitulino Vasconcelos",
        "numero": 611,
        "bairro": "Centro",
        "cidade": "Palmeira dos Índios",
        "estado": "AL",
        "telefone_fixo": "(82) 3901-4705",
        "celular": "(82) 99743-8275",
        "altura": "1,70",
        "peso": 82,
        "tipo_sanguineo": "B-",
        "cor": "vermelho"
      }
    ]
    ,
});
}

pessoasService.add = async (req, res) => {

  const data = req.body;

  return res.status(200).json({
    message: "Pessoa cadastrada com sucesso",
    data
  })
}

module.exports = pessoasService;
