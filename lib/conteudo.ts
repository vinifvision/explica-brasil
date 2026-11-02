export type Parte = "pla" | "con" | "cam" | "sen" | "tor" | "stf" | "jus";

export type Secao = {
  titulo: string;
  texto?: string;
  itens?: string[];
};

export type Conteudo = {
  titulo: string;
  secoes: Secao[];
  dica?: string;
};

export const CONTEUDO: Record<Parte, Conteudo> = {
  pla: {
    titulo: "Palácio do Planalto",
    secoes: [
      {
        titulo: "O que é",
        texto:
          "É o local de trabalho do Presidente da República e a sede do Poder Executivo. O Executivo é quem administra o país no dia a dia, colocando as leis em prática.",
      },
      {
        titulo: "O que faz",
        itens: [
          "Administra o país e executa as leis aprovadas pelo Congresso",
          "Monta a proposta de orçamento e envia ao Congresso",
          "Sanciona (aprova) ou veta (rejeita) as leis votadas pelo Congresso",
          "Pode editar Medidas Provisórias, que valem na hora mas precisam ser aprovadas pelo Congresso",
          "Escolhe os ministros e comanda as Forças Armadas",
        ],
      },
      {
        titulo: "Quem está lá",
        texto:
          "O Presidente e o Vice-Presidente, eleitos a cada 4 anos, com direito a uma reeleição seguida. Eles são ajudados pelos ministros, que cuidam de áreas como saúde, educação e economia.",
      },
      {
        titulo: "No seu dia a dia",
        texto:
          "Programas sociais, campanhas nacionais de vacinação e obras em rodovias federais são exemplos de ações tocadas pelo Executivo federal.",
      },
      {
        titulo: "Curiosidade",
        texto:
          "Projetado por Oscar Niemeyer e inaugurado em 1960. A famosa rampa é usada na cerimônia de posse, quando o novo presidente sobe para assumir o cargo.",
      },
    ],
  },

  con: {
    titulo: "Congresso Nacional",
    secoes: [
      {
        titulo: "O que é",
        texto:
          "É a sede do Poder Legislativo federal, formado por duas casas: a Câmara dos Deputados, que representa o povo, e o Senado Federal, que representa os estados.",
      },
      {
        titulo: "O que faz",
        itens: [
          "Cria e vota as leis do país",
          "Aprova o orçamento: decide quanto dinheiro vai para cada área",
          "Fiscaliza o Executivo e acompanha como o dinheiro público é gasto",
          "Pode mudar a Constituição, por meio de PECs (Propostas de Emenda à Constituição)",
        ],
      },
      {
        titulo: "Quem está lá",
        texto:
          "594 parlamentares no total: 513 deputados federais e 81 senadores.",
      },
      {
        titulo: "No seu dia a dia",
        texto:
          "O orçamento que define quanto vai para hospitais, escolas e segurança precisa ser aprovado aqui todos os anos.",
      },
      {
        titulo: "Curiosidade",
        texto:
          "Também projetado por Niemeyer, o Congresso recebe visitas guiadas abertas ao público.",
      },
    ],
    dica: "Toque no prato, na cúpula ou nas torres para explorar cada parte.",
  },

  cam: {
    titulo: "Câmara dos Deputados",
    secoes: [
      {
        titulo: "O que é",
        texto:
          "É uma das duas casas do Congresso Nacional. Ela representa o povo: cada estado elege deputados de acordo com o tamanho da sua população.",
      },
      {
        titulo: "O que faz",
        itens: [
          "Cria, discute e vota leis. A maioria dos projetos começa a tramitar por aqui",
          "Fiscaliza o governo, inclusive abrindo CPIs (comissões de investigação)",
          "Autoriza a abertura de um processo de impeachment contra o Presidente",
        ],
      },
      {
        titulo: "Quem está lá",
        texto:
          "513 deputados federais, eleitos a cada 4 anos. Cada estado tem no mínimo 8 e no máximo 70 deputados. São Paulo, o mais populoso, tem 70.",
      },
      {
        titulo: "No seu dia a dia",
        texto:
          "Mudanças nas regras de trânsito, no Enem ou no FGTS, por exemplo, viram lei passando por aqui.",
      },
      {
        titulo: "Curiosidade",
        texto:
          'O "prato" virado para cima costuma ser lido como o símbolo de uma casa aberta a ouvir o povo.',
      },
    ],
  },

  sen: {
    titulo: "Senado Federal",
    secoes: [
      {
        titulo: "O que é",
        texto:
          "É a outra casa do Congresso Nacional. Ele representa os estados: todos têm o mesmo número de senadores, não importa o tamanho.",
      },
      {
        titulo: "O que faz",
        itens: [
          "Revisa e vota os projetos que vêm da Câmara (e vice-versa)",
          "Aprova nomes para cargos importantes, como ministros do STF e embaixadores",
          "Julga o Presidente em um processo de impeachment",
        ],
      },
      {
        titulo: "Quem está lá",
        texto:
          "81 senadores: 3 por estado e 3 pelo Distrito Federal. O mandato é de 8 anos, e a renovação é alternada: a cada 4 anos, ora se elege 1 senador por estado, ora 2.",
      },
      {
        titulo: "No seu dia a dia",
        texto:
          "Quem vira ministro do STF precisa antes passar por uma entrevista aqui, a sabatina, e ser aprovado pelos senadores.",
      },
      {
        titulo: "Curiosidade",
        texto:
          "A cúpula virada para baixo costuma ser lida como o símbolo da reflexão e do equilíbrio nas decisões.",
      },
    ],
  },

  tor: {
    titulo: "Torres do Congresso",
    secoes: [
      {
        titulo: "O que é",
        texto:
          "São os dois prédios de escritórios do Congresso, com 28 andares cada, ligados por uma passarela no meio.",
      },
      {
        titulo: "O que faz",
        texto:
          "Abrigam a parte administrativa do Congresso: os setores técnicos e os serviços que dão suporte ao trabalho de deputados e senadores.",
      },
      {
        titulo: "Curiosidade",
        texto:
          'Vistos de frente, os dois prédios ligados formam um "H", que muita gente lê como a inicial de "Humanidade".',
      },
    ],
  },

  stf: {
    titulo: "Supremo Tribunal Federal",
    secoes: [
      {
        titulo: "O que é",
        texto:
          "É o tribunal mais alto do país e o topo do Poder Judiciário. Sua principal missão é proteger a Constituição.",
      },
      {
        titulo: "O que faz",
        itens: [
          "Decide se uma lei ou ato do governo respeita a Constituição",
          "Julga autoridades como o Presidente e os parlamentares em casos de crimes comuns",
          "Dá a palavra final em disputas que envolvem a Constituição",
        ],
      },
      {
        titulo: "Quem está lá",
        texto:
          "11 ministros, indicados pelo Presidente e aprovados pelo Senado. Eles não têm mandato fixo e podem ficar no cargo até se aposentarem, no máximo aos 75 anos.",
      },
      {
        titulo: "No seu dia a dia",
        texto:
          "Quando o STF decide sobre um direito garantido pela Constituição, a decisão costuma valer para o país inteiro.",
      },
      {
        titulo: "Curiosidade",
        texto:
          "As sessões do plenário são transmitidas ao vivo pela TV Justiça.",
      },
    ],
  },

  jus: {
    titulo: "A Justiça",
    secoes: [
      {
        titulo: "O que é",
        texto:
          "É a escultura de granito em frente ao STF, criada pelo artista Alfredo Ceschiatti. Ela mostra uma mulher sentada, de olhos vendados, com uma espada no colo.",
      },
      {
        titulo: "O que simboliza",
        itens: [
          "A venda nos olhos: a justiça deve tratar todos igualmente, sem olhar a quem",
          "A espada: a força e a autoridade para fazer cumprir as decisões",
        ],
      },
      {
        titulo: "Curiosidade",
        texto:
          "Ao contrário de muitas representações da justiça pelo mundo, essa estátua não segura uma balança.",
      },
    ],
  },
};
