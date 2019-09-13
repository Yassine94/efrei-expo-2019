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
  
export const CREATE_PORSCHE = gql `
  mutation createPorsche($data: PorscheInput!) {
    createPorsche(data: $data)
  } 
  `;
/* Exemple JSON
{
  "data": {
    "GenericModelId": "743558d9-a2b6-4d8a-9d03-4ec448249f0d",
    "model": "911 GT3 RS",
    "imageURL": "https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt3-rs-modelimage-sideshot/thumbwhite/da4b3b42-17dc-11e8-bbc5-0019999cd470/porsche-thumbwhite.jpg"
  }
} */