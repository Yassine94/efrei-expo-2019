const typeDefs = `
  schema {
    query: Query
  }

  type Query {
    porsches: [Porsche!]!
  }

  type Porsche {
    id: ID!
    genericModel: GenericModel!
  }

  type GenericModel {
    title: String!
    imageURL: String!
  }
`;

export default typeDefs;
