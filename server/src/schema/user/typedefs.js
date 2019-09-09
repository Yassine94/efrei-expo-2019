const typeDefs = `
  schema {
    query: Query
  }

  type Query {
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    city: String!
  }
`;

export default typeDefs;
