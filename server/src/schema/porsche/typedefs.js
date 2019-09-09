const typeDefs = `
  schema {
    query: Query
  }

  type Query {
    porsches: [Porsche!]!
    genericModels: [GenericModel!]!
  }

  type Porsche {
    id: ID!
    genericModel: GenericModel!
  }

  type GenericModel {
    model: String!
    imageURL: String!
  }
`;

export default typeDefs;
