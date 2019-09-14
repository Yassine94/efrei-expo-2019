const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(data: UserInput): Boolean!
    editUser(id: ID!, data: UserInput!): User!
  }

  type User {
    id: ID!
    company: String!
    city: String!
  }

  input UserInput {
    company: String!
    city: String!
  }
`;

export default typeDefs;
