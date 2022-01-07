const Estados = [
    {
        titulo:'Acre - AC',
        img: process.env.PUBLIC_URL+ '/Estados/Acre.jpg',
        descricao:'Acre é um estado no noroeste do Brasil, na Floresta Amazónica. É conhecido pela quantidade de árvores-da-borracha e castanhas-do-brasil. Na fronteira peruana, a oeste, o Parque Nacional da Serra do Divisor possui montanhas elevadas e várias quedas de água, além de diversas espécies animais, como tatus-gigantes, tapires e aves raras. A sudeste, encontra-se Rio Branco, a capital do estado, nas margens do rio Acre.'
    },
    {
        titulo:'Alagoas - AL',
        img: process.env.PUBLIC_URL+ '/Estados/Alagoas.jpg',
        descricao:'Alagoas é um pequeno estado do nordeste brasileiro cujo litoral tropical é marcado por praias de areia branca repletas de palmeiras, lagoas cristalinas e recifes de corais. Em Maceió, sua capital, estão localizadas as famosas praias Pajuçara e Ponta Verde, com hotéis, bares e restaurantes. Os recifes de corais decoram o litoral ao norte de Maceió que, por isso, tem o apelido de Costa dos Corais.'
    },
    {
        titulo:'Amapá - AP',
        img: process.env.PUBLIC_URL + '/Estados/Amapa.jpg',
        descricao: 'Amapá é um estado no norte do Brasil que faz fronteira com o Suriname, a Guiana Francesa e o Oceano Atlântico. A floresta amazónica abrange uma grande parte da sua área e o rio Oiapoque faz parte da sua fronteira a norte. No sul, a capital, Macapá, é conhecida pela Fortaleza de São José de Macapá, situada à beira-mar, um forte português do século XVIII, e pelo Monumento do Marco Zero, um obelisco que marca o equador.'
    },
    {
        titulo:'Amazonas - AM',
        img: process.env.PUBLIC_URL+ '/Estados/Amazonas.jpg',
        descricao:'Amazonas é um enorme estado no noroeste do Brasil, coberto quase na sua totalidade pela floresta tropical da Amazónia. A capital, Manaus, é um porto fluvial com pontos de referência que datam do ciclo da borracha de finais do século XIX, incluindo o Teatro Amazonas, uma grande casa de ópera. A cidade marca o "Encontro das Águas", onde o rio Negro, de água negra, e o rio Solimões se juntam para formar o rio Amazonas.'
    },
    {
        titulo:'Bahia - BA',
        img: process.env.PUBLIC_URL+ '/Estados/Bahia.jpg',
        descricao:'A Bahia é um estado do nordeste brasileiro com paisagens que variam da costa tropical até a aridez do Sertão. A capital, Salvador, é conhecida por seu centro histórico, o Pelourinho, com uma rica arquitetura colonial do século XVII e assentado sobre a Baía de Todos-os-Santos. O Carnaval da cidade reúne foliões fantasiados que dançam ao som do samba e do axé em uma enorme festa de rua.'
    },
    {
        titulo:'Ceará - CE',
        img: process.env.PUBLIC_URL+ '/Estados/Ceara.jpg',
        descricao:'O Ceará, um estado do nordeste brasileiro, tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas. O balneário de Canoa Quebrada tem enormes dunas de areia rosadas e a Rua Dragão do Mar, muito movimentada e também conhecida como Broadway. A cidade isolada de Jericoacoara, cercada pelo Parque Nacional de Jericoacoara, repleto de dunas, é famosa por suas ruas de areia, pela prática de windsurfe e pelo pôr do sol incomum em tons de verde.'
    },
    {
        titulo:'Distrito Federal - DF',
        img: process.env.PUBLIC_URL+ '/Estados/DistritoFederal.jpg',
        descricao:'O Distrito Federal situa-se nas montanhas centrais do Brasil e alberga a capital da nação, Brasília, cidade moderna e planeada para o efeito. A cidade tem edifícios futuristas concebidos pelo célebre arquiteto brasileiro, Oscar Niemeyer. Estes incluem a Catedral de Brasília, que é curva e tem telhados de vidro. O Palácio Itamaraty de Niemeyer é conhecido pelos arcos, o espelho de água e os jardins tropicais.'
    },
    {
        titulo:'Espírito Santo - ES',
        img: process.env.PUBLIC_URL+ '/Estados/EspiritoSanto.jpg',
        descricao:'O Espírito Santo, estado da região Sudeste do Brasil, é conhecido por suas praias tropicais e áreas naturais montanhosas preservadas. Fundada em 1551, Vitória, capital e cidade portuária, tem um pequeno centro da era colonial. Do outro lado da estreita baía de Vitória, fica Vila Velha, com a movimentada Praia da Costa e o Convento da Penha, construção do século XVI que fica no alto de um penhasco e oferece uma vista panorâmica.'
    },
    {
        titulo:'Goiás - GO',
        img: process.env.PUBLIC_URL+ '/Estados/Goias.jpg',
        descricao:'Goiás, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros é uma reserva de montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas de água. Fundadas durante o século XVIII, as cidades do ciclo de ouro de Pirenópolis e Goiás Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas cristãs.'
    },
    {
        titulo:'Maranhão - MA',
        img: process.env.PUBLIC_URL+ '/Estados/Maranhao.jpg',
        descricao:'Maranhão, estado no nordeste brasileiro, é formado em parte pela Floresta Amazônica e pelas praias ao longo do Oceano Atlântico. Próximo à cidade de Barreirinhas, grandes dunas de areia branca criam paisagens que lembram um deserto no Parque Nacional Lençóis Maranhenses, onde lagoas de água fresca nas quais se pode nadar se formam durante a temporada de chuvas. É na capital, São Luís, que se encontra o agitado bairro histórico conhecido como Reviver.'
    },
    {
        titulo:'Mato Grosso - MT',
        img: process.env.PUBLIC_URL+ '/Estados/MatoGrosso.jpg',
        descricao:'Mato Grosso, um grande estado no centro-oeste brasileiro, é coberto na maioria pela floresta tropical amazónica, as zonas húmidas e as planícies da savana. A capital, Cuiabá, é um centro de viagens que remonta à corrida ao ouro do século XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimarães possui áreas de caminhada com penhascos em arenito, quedas de água e cavernas. As extensas zonas húmidas do Pantanal albergam diversas espécies selvagens, incluindo araras, caimões e jaguares.'
    },
    {
        titulo:'Mato Grosso do Sul - MS',
        img: process.env.PUBLIC_URL+ '/Estados/MatoSul.jpg',
        descricao:'Mato Grosso do Sul é uma das 27 unidades federativas do Brasil. Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo e Paraná; e dois países sul-americanos: Paraguai e Bolívia.'
    },
    {
        titulo:'Minas Gerais - MG',
        img: process.env.PUBLIC_URL+ '/Estados/Minas.jpg',
        descricao:'Minas Gerais, um grande estado continental no sudeste do Brasil, é conhecido por cidades da era colonial que remetem à corrida do ouro no país no século 18. Entre elas estão São João del Rei, Tiradentes e Ouro Preto, a antiga capital, todas com ruas de paralelepípedo, mansões ornamentadas e igrejas barrocas decoradas pelo escultor Aleijadinho.O famoso trem a vapor Maria Fumaça liga Tiradentes a São João del Rei.'
    },
    {
        titulo:'Pará - PA',
        img: process.env.PUBLIC_URL+ '/Estados/Para.jpg',
        descricao:'Pará, um estado no norte do Brasil, é onde se encontra o Parque Nacional da Amazônia. Protegendo uma extensa faixa da exuberante e densa Floresta Amazônica, o parque é lar de milhares de espécies da vida selvagem. Boa parte dela é alagada todos os anos, tornando o acesso a áreas distantes somente por barco. Próxima da desembocadura do Rio Amazonas está Belém, a capital do Pará. Ela é conhecida pela arquitetura colonial e pelo mercado Ver-o-Peso às margens do rio.'
    },
    {
        titulo:'Paraíba - PB',
        img: process.env.PUBLIC_URL+ '/Estados/Paraiba.jpg',
        descricao:'Paraíba, um estado no nordeste do Brasil, é conhecido pela linha da costa tropical e pela arquitetura colonial portuguesa. A capital, João Pessoa, possui praias como a Manaíra e Tambaú, além de locais de mergulho repletos de corais ao largo da costa. Junto ao rio Paraíba, o centro histórico da cidade possui casas coloridas e a igreja de São Francisco, com uma arquitetura barroca. A Ponta do Seixas, com o farol Cabo Branco nas proximidades, marca o ponto mais a leste das Américas.'
    },
    {
        titulo:'Paraná - PR',
        img: process.env.PUBLIC_URL+ '/Estados/Parana.jpg',
        descricao:'Paraná é um estado no sul do Brasil que alberga as Cataratas do Iguaçu, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Iguaçu, uma floresta subtropical com diversas espécies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quilómetros a este, perto das praias atlânticas de Guaratuba e do grande porto de Paranaguá, fica a frondosa capital do estado, Curitiba.'
    },
    {
        titulo:'Pernambuco - PE',
        img: process.env.PUBLIC_URL+ '/Estados/Pernambuco.jpg',
        descricao:'Pernambuco é um estado no nordeste do Brasil, no Oceano Atlântico. A sua capital moderna, o Recife, inclui um porto, a cidade velha e a popular área balnear de Boa Viagem. Ao largo da costa, o arquipélago vulcânico de Fernando de Noronha possui uma linha costeira dentada, praias poucos urbanizadas e um parque marítimo. A sul do Recife, a praia de Porto de Galinhas, protegida por um recife, oferece piscinas naturais. A norte encontra-se Olinda, uma cidade colonial situada entre uma vegetação exuberante.'
    },
    {
        titulo:'Piauí - PI',
        img: process.env.PUBLIC_URL+ '/Estados/Piaui.jpg',
        descricao:'Piauí é um estado no nordeste do Brasil conhecido pelos parques nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui sítios arqueológicos com pinturas rupestres pré-históricas. Nas proximidades, o Parque Nacional Serra das Confusões tem gigantescas formações rochosas e grandes áreas de caatinga (vegetação semiárida), onde vivem aves em risco de extinção. As mangueiras ladeiam as ruas da capital à beira-rio, Teresina.'
    },
    {
        titulo:'Rio de Janeiro - RJ',
        img: process.env.PUBLIC_URL+ '/Estados/RioJaneiro.jpg',
        descricao:'O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.'
    },
    {
        titulo:'Rio Grande do Norte - RN',
        img: process.env.PUBLIC_URL+ '/Estados/RioGrandeNorte.jpg',
        descricao:'Rio Grande do Norte é um estado na extremidade nordeste do Brasil. A capital, Natal, fica numa costa repleta de praias onde se encontra o Forte dos Reis Magos, em forma de estrela, um forte português do século XVI. Ponta Negra é uma praia enquadrada pela enorme duna, Morro do Careca, um símbolo da cidade. A sul, a Praia de Pipa é uma estância célebre pelo surf e pelos golfinhos.'
    },
    {
        titulo:'Rio Grande do Sul - RS',
        img: process.env.PUBLIC_URL+ '/Estados/RioGrandeSul.jpg',
        descricao:'Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha alberga a região vinícola do Vale dos Vinhedos e inclui cidades turísticas de estilo alemão como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, é um grande porto com estruturas clássicas como o Mercado Público e a Catedral Metropolitana, no centro histórico.'
    },
    {
        titulo:'Rondônia - RO',
        img: process.env.PUBLIC_URL+ '/Estados/Rondonia.jpg',
        descricao:'Rondônia é uma das 27 unidades federativas do Brasil. Está localizado na região Norte e tem como limites os estados de Mato Grosso a leste, Amazonas a norte, Acre a oeste e a República da Bolívia a oeste e sul.'
    },
    {
        titulo:'Roraima - RR',
        img: process.env.PUBLIC_URL+ '/Estados/Roraima.jpg',
        descricao:'Roraima, o estado mais a norte do Brasil, é conhecido pela Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio Branco, fica próxima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan Doyle para "O Mundo Perdido".'
    },
    {
        titulo:'Santa Catarina - SC',
        img: process.env.PUBLIC_URL+ '/Estados/SantaCatarina.jpg',
        descricao:'Santa Catarina é um estado na região sul do Brasil. Com uma longa costa com o Atlântico e muitas ilhas, ela é conhecida por suas praias e montanhas. Florianópolis, a capital, tem um mercado público tradicional com bares, restaurantes e barracas de comida, além de um museu histórico instalado em um palácio do governo colonial do século 19. Florianópolis está basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte.'
    },
    {
        titulo:'São Paulo - SP',
        img: process.env.PUBLIC_URL+ '/Estados/SaoPaulo.jpg',
        descricao:'São Paulo é uma das 27 unidades federativas do Brasil. Está situado na Região Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paraná a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, além do Oceano Atlântico a sudeste. '
    },
    {
        titulo:'Sergipe - SE',
        img: process.env.PUBLIC_URL+ '/Estados/Sergipe.jpg',
        descricao:'Sergipe, o estado mais pequeno do Brasil, situa-se na costa atlântica da região do nordeste. A capital, Aracaju, é conhecida pelas praias, tal como a Praia da Atalaia, com o seu longo passeio. Fundada em 1590, a antiga capital, São Cristóvão, alberga edifícios da era colonial, incluindo o convento e a Igreja de São Francisco, do século XVII. O Cânion do Xingó, no rio de São Francisco, ladeia um popular lago para passeios de barco.'
    },
    {
        titulo:'Tocantins - TO',
        img: process.env.PUBLIC_URL+ '/Estados/Tocantins.jpg',
        descricao:'Tocantins é um estado no centro do Brasil. Caracteriza-se pelo cerrado (prado seco e matagais), rios vastos e plantações de soja. A capital moderna, Palmas, foi construída propositadamente no centro geográfico do estado e está rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de água.'
    },
]

export default Estados;