window.NF_SCHEMA = {
  "questions": [
    {
      "key": "modalidade",
      "title": "Qual modalidade você frequenta?",
      "options": [
        "Técnico",
        "FIC",
        "Outra / não sei"
      ],
      "kind": "radio",
      "scope": "ambos",
      "hint": ""
    },
    {
      "key": "turno",
      "title": "Qual é seu turno?",
      "options": [
        "Manhã",
        "Tarde",
        "Noite",
        "Integral",
        "Variável"
      ],
      "kind": "radio",
      "scope": "ambos",
      "hint": ""
    },
    {
      "key": "refeicao",
      "title": "Qual refeição você está avaliando?",
      "options": [
        "Desjejum",
        "Lanche da manhã",
        "Almoço",
        "Lanche da tarde",
        "Jantar"
      ],
      "kind": "radio",
      "scope": "ambos",
      "hint": "Escolha uma refeição. No diagnóstico, pense nos últimos cinco dias letivos e use essa refeição como referência."
    },
    {
      "key": "frequencia",
      "title": "Nos últimos cinco dias letivos em que esteve na escola, com que frequência você consumiu essa refeição?",
      "options": [
        "Todos ou quase todos os dias",
        "Alguns dias",
        "Raramente",
        "Nenhum dia",
        "Não se aplica"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "prato",
      "title": "Qual preparação você lembra de ter sido oferecida?",
      "options": [
        "Pão com frango / recheio de frango",
        "Pão com presunto",
        "Pão com queijo",
        "Pão com ovos mexidos",
        "Cuscuz com salsicha",
        "Cuscuz temperado",
        "Cuscuz com calabresa",
        "Cuscuz simples",
        "Filé de frango acebolado",
        "Boi guisado",
        "Dobradinha",
        "Lasanha de frango",
        "Filé de peixe",
        "Toscana",
        "Coxa com sobrecoxa crocante",
        "Filé de frango ao molho branco",
        "Frutas",
        "Bolo",
        "Arroz doce",
        "Papa de aveia",
        "Outra preparação",
        "Não lembro / não se aplica"
      ],
      "kind": "select",
      "scope": "ambos",
      "hint": "Escolha a preparação principal ou a que motivou sua avaliação. No modo diário, considere apenas hoje."
    },
    {
      "key": "consumo",
      "title": "Da última vez que essa refeição foi oferecida, quanto você consumiu?",
      "options": [
        "Tudo ou quase tudo",
        "Cerca de metade",
        "Pouco",
        "Peguei, mas não comi",
        "Não cheguei a pegar",
        "Não lembro"
      ],
      "kind": "radio",
      "scope": "ambos",
      "hint": ""
    },
    {
      "key": "satisfacao",
      "title": "Como você avalia a preparação que escolheu?",
      "options": [
        "Muito ruim",
        "Ruim",
        "Regular",
        "Boa",
        "Muito boa",
        "Não experimentei / não lembro"
      ],
      "kind": "radio",
      "scope": "ambos",
      "hint": ""
    },
    {
      "key": "motivos",
      "title": "Se você deixou de pegar ou comer tudo, quais fatores contribuíram?",
      "options": [
        "Não gosto da preparação",
        "Sabor muito forte",
        "Sabor muito fraco",
        "Cheiro",
        "Textura",
        "Aparência",
        "Temperatura",
        "Quantidade grande",
        "Pouca fome",
        "Fila ou falta de tempo",
        "Trouxe/comprei outro alimento",
        "Restrição alimentar",
        "Outro motivo",
        "Nenhum / não se aplica"
      ],
      "kind": "check",
      "scope": "ambos",
      "hint": "Marque todas as opções que se aplicam. Se não houve motivo, marque apenas “Nenhum / não se aplica”."
    },
    {
      "key": "aparencia",
      "title": "Como você avalia a aparência da refeição escolhida?",
      "options": [
        "Muito ruim",
        "Ruim",
        "Regular",
        "Boa",
        "Muito boa",
        "Não sei avaliar"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "aroma",
      "title": "Como você avalia a cheiro da refeição escolhida?",
      "options": [
        "Muito ruim",
        "Ruim",
        "Regular",
        "Boa",
        "Muito boa",
        "Não sei avaliar"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "textura",
      "title": "Como você avalia a textura da refeição escolhida?",
      "options": [
        "Muito ruim",
        "Ruim",
        "Regular",
        "Boa",
        "Muito boa",
        "Não sei avaliar"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "temperatura",
      "title": "Como você avalia a temperatura da refeição escolhida?",
      "options": [
        "Muito ruim",
        "Ruim",
        "Regular",
        "Boa",
        "Muito boa",
        "Não sei avaliar"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "quantidade",
      "title": "Como você considera a quantidade servida?",
      "options": [
        "Menor do que preciso",
        "Adequada",
        "Maior do que preciso",
        "Não sei avaliar"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "fila",
      "title": "Como você avalia o tempo disponível para pegar e consumir a refeição?",
      "options": [
        "Insuficiente",
        "Adequado",
        "Mais do que suficiente",
        "Não sei avaliar"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "tempero",
      "title": "Como você percebe a intensidade geral dos temperos?",
      "options": [
        "Muito suave",
        "Suave",
        "Adequada",
        "Forte",
        "Muito forte",
        "Não sei avaliar"
      ],
      "kind": "radio",
      "scope": "ambos",
      "hint": ""
    },
    {
      "key": "condimentos",
      "title": "Como você percebe a quantidade dos ingredientes abaixo na refeição?",
      "options": [
        "Insuficiente",
        "Adequada",
        "Excessiva",
        "Não percebo / não sei"
      ],
      "kind": "matrix",
      "scope": "diagnostico",
      "hint": "Avalie apenas o que consegue perceber. Não há resposta certa."
    },
    {
      "key": "preferencia",
      "title": "Fora da escola, você costuma gostar desse tipo de preparação?",
      "options": [
        "Sim",
        "Às vezes",
        "Não",
        "Nunca experimentei / não sei"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "variacao",
      "title": "Qual intensidade de tempero você prefere em geral?",
      "options": [
        "Mais suave",
        "Intermediária",
        "Mais intensa",
        "Depende da preparação",
        "Não tenho preferência"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "mudancas",
      "title": "O que mais faria você consumir a refeição com maior frequência?",
      "options": [
        "Mais variedade",
        "Ajustes de sabor e tempero",
        "Melhor temperatura",
        "Mudança na textura",
        "Porção ajustável",
        "Menor fila / mais tempo",
        "Nada, já consumo regularmente",
        "Outro / não sei"
      ],
      "kind": "radio",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "favorito",
      "title": "Qual preparação você mais gostaria de encontrar no cardápio?",
      "options": [
        "Pão com frango / recheio de frango",
        "Pão com presunto",
        "Pão com queijo",
        "Pão com ovos mexidos",
        "Cuscuz com salsicha",
        "Cuscuz temperado",
        "Cuscuz com calabresa",
        "Cuscuz simples",
        "Filé de frango acebolado",
        "Boi guisado",
        "Dobradinha",
        "Lasanha de frango",
        "Filé de peixe",
        "Toscana",
        "Coxa com sobrecoxa crocante",
        "Filé de frango ao molho branco",
        "Frutas",
        "Bolo",
        "Arroz doce",
        "Papa de aveia",
        "Outra preparação",
        "Não lembro / não se aplica"
      ],
      "kind": "select",
      "scope": "diagnostico",
      "hint": ""
    },
    {
      "key": "comentario",
      "title": "O que a escola poderia melhorar na alimentação?",
      "options": [],
      "kind": "text",
      "scope": "ambos",
      "hint": "Opcional. Não informe nomes, turma, matrícula, contatos ou informações pessoais."
    }
  ],
  "spices": [
    "Sal",
    "Alho",
    "Cebola",
    "Coentro",
    "Pimentão",
    "Pimenta-de-cheiro",
    "Cominho"
  ],
  "meals": [
    "Desjejum",
    "Lanche da manhã",
    "Almoço",
    "Lanche da tarde",
    "Jantar"
  ],
  "dishes": [
    "Pão com frango / recheio de frango",
    "Pão com presunto",
    "Pão com queijo",
    "Pão com ovos mexidos",
    "Cuscuz com salsicha",
    "Cuscuz temperado",
    "Cuscuz com calabresa",
    "Cuscuz simples",
    "Filé de frango acebolado",
    "Boi guisado",
    "Dobradinha",
    "Lasanha de frango",
    "Filé de peixe",
    "Toscana",
    "Coxa com sobrecoxa crocante",
    "Filé de frango ao molho branco",
    "Frutas",
    "Bolo",
    "Arroz doce",
    "Papa de aveia",
    "Outra preparação",
    "Não lembro / não se aplica"
  ]
};
