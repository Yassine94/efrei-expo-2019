import gql from 'graphql-tag';

export const GET_GENERIC_MODELS = gql `
    {
        genericModels{
            id,
            model,
            imageURL}
    }`;
