const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
//graphql de  degişkeninde birden fazla  veri tipi oldugu için süsülü parantezler ile kapsüllüyoruz.
const MovieType = new GraphQLObjectType({
  name: "Movie",
  description:"İzlediginiz filimlerin kayitlarini tutan tablo",
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
