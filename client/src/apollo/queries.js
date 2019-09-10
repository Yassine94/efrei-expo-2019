import gql from 'graphql-tag';

export const GET_GENERIC_MODELS = gql `
  {
    genericModels{
      id,
      model,
      imageURL
    }
  }`;

export const SEARCH_PORSCHES = gql `
  query searchPorsches($GenericModelId: ID!) {
  	searchPorsches(GenericModelId: $GenericModelId) {
      id
  		model
      imageURL
  	}
  }
  `;
