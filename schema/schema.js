const graphql = require("graphql");
const _=require('lodash');
//lodash dizi ve objelerde arama bulma her türlü işlemi yapabilir.
const { GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLSchema } = graphql;
//graphql de  degişkeninde birden fazla  veri tipi oldugu için süsülü parantezler ile kapsüllüyoruz.


const movies = [{
    id: '1',
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    year: 1972,
    directorId:'1'
  },
  {
    id: '2',
    title: 'Scarface',
    description: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
    year: 1980,
    directorId:'1'
    
  },
  {
    id: '3',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    year: 1994,
    directorId:'3'
  }
];
const directors = [{
    id: '1',
    name: 'Francis Ford Coppola',
    birth: 1939
  },
  {
    id: '2',
    name: 'Quentin Tarantino',
    birth: 1963
  },
  {
    id: '3',
    name: 'Brian De Palma',
    birth: 1940
  }
];
const MovieType = new GraphQLObjectType({
  name: "Movie",
  description: "İzlediginiz filimlerin kayitlarini tutan tablo",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "graphql primary key",
    },
    title: {
      type: GraphQLString,
      description: "Film adi bu kolonda yer alacak",
    },
    description: {
      type: GraphQLString,
      description: "Film hakkinda bilgiler yer alacak",
    },
    year: {
      type: GraphQLInt,
      description: "Filmin yayina giris tarihi",
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLString,
          description: "Sorgulamalar id üzerinden yapilmaktadir.",
        },
      },
      description: "Tüm filmleri listeleyen api.",
      resolve(parents, args) {
        return _.find(movies,{id:args.id});
      },
    },
  },
});

module.exports=new GraphQLSchema({
    query:RootQuery
});
