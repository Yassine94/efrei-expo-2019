const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    porsches: [Porsche!]!
    genericModels: [GenericModel!]!
  }

  type Mutation {
    createPorsche(data: CreatePorscheInput!): Boolean!
  }

  type Porsche {
    id: ID!
    genericModel: GenericModel!
    model: String!
    imageURL: String!
  }

  type GenericModel {
    id: ID!
    model: String!
    imageURL: String!
  }

  input GenericModelInput {
    model: String!
    imageURL: String!
  }

  input CreatePorscheInput {
    genericModel: GenericModelInput!
    model: String!
    imageURL: String!
  }
`;

export default typeDefs;
