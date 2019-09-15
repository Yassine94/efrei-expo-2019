const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    loginUser(email: String!, password: String!): User
    createUser(data: UserInput): Boolean!
    editUser(id: ID!, data: UserInput!): User!
  }

  type User {
    id: ID!
    email: String!
    company: String!
    city: String!
  }

  input UserInput {
    email: String!
    company: String!
    city: String!
  }
`;

export default typeDefs;
