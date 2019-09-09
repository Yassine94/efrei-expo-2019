const typeDefs = `
  schema {
    query: Query
  }

  type Query {
    products: [Product!]!
  }

  type Product {
    id: ID!
    title: String!
    category: String!
    price: Int!
    imageURL: String
  }
`;

export default typeDefs;
