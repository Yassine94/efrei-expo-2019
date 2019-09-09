const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    editUser(id: ID!, data: UserInput!): User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    city: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    city: String!
  }
`;

export default typeDefs;
