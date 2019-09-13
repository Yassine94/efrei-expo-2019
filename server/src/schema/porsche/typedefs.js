const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    porsches: [Porsche!]!
    searchPorsches(GenericModelId: ID!): [Porsche!]!
    genericModels: [GenericModel!]!
    genericModel(id: ID!): GenericModel
  }

  type Mutation {
    createPorsche(data: PorscheInput!): Boolean!
    editPorsche(id: ID!, data: PorscheInput): Porsche!
  }

  type Porsche {
    id: ID!
    genericModel: GenericModel!
    model: String!
    imageURL: String!
    basePrice: Int!
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

  input PorscheInput {
    GenericModelId: ID!
    model: String!
    imageURL: String!
  }
`;

export default typeDefs;
