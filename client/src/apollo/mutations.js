import gql from 'graphql-tag';

export const LOGIN_USER = gql `
  mutation loginUser($email: String!, $password: String!) {
  	loginUser(email:$email, password: $password) { email, company }
  }`;

export const CREATE_PORSCHE = gql `
  mutation createPorsche($data: PorscheInput!) {
    createPorsche(data: $data)
  }`;

export const CREATE_USER = gql `
  mutation createUser($data: UserInput) {
    createUser(data: $data)
  }`;

export const EDIT_USER = gql `
  mutation editUser($id: ID!, $data: UserInput!) {
    editUser(id:$id, data: $data) { company }
  }`;
