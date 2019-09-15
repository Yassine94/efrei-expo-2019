<img src="https://files1.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-banner-ww-taycantops-kw36/normal/f95e20c7-cd85-11e9-80c5-005056bbdc38;sM;twebp/porsche-normal.webp" width="100%" />
<br>

RN Porsche allows you to buy and sell Porsches with a beautifull UI ( And awesome cars )

## Requirements
- Use GraphQL API, Expo, React Navigation
- Users CRUD
- Posts CRUD
- Add Camera handling for Posts
- Display Posts list
- Filter Posts list
- Display Post details
- Display User details, with the list of his own Posts
- Only needs npm install && expo start to start
- Publish project on Expo, using unique expo.slug identifier
- Publish API on Heroku
## Bonuses
- Host images on a S3 bucket
- Add profile picture for Users, visible on Posts and Profile
- Send notification to Seller when an User is "interested"
- Display notification list of Posts sold for Seller
- Display "interested" Posts list for User
- Auth by cellphone number, code sent by SMS
- Add Geolocation of Seller in Posts
- Display Posts on a map
- Share Post to a contact via SMS
- Payment for Seller, Buyer via Stripe

## Server Side


## Run locally
 - /efrei-expo-2019/server/$ npm install
 - /efrei-expo-2019/server/$ npm run start

## Models

GenericModels : represents the GenericModels 

Each one of these models is persisted on a PostGres database and can be accessed through GraphQL

## Queries
Each model as at least 2 queries available :

- SEARCH
- ET

Here is an example to get one Model by using his ID :

 query searchPorsches($GenericModelId: ID!) {
  	searchPorsches(GenericModelId: $GenericModelId) {
    id
  	model
        imageURL
  	}
  }`;

## Mutations
Each model as at least 3 mutations available :

CREATE
UPDATE
DELETE

Here is an example to create an user :
  mutation createUser($data: UserInput) 
  {
    createUser(data: $data)
  }`;

Client Side
## Current Features
 - Login | Register
 - Profile
 - 6 models of porsches implemented ( Macan, 911, 718, Taycan, Cayenne, Panamera)
 - Each of those 6 models have other models like 718 Spyder, 911 GT3 RS ...
 - All specific models has a details page
## Developers 🏎️
 - DE SOUSA Dylan
 - FATIHI Yassine
