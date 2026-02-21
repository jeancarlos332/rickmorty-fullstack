import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
 query Character($id: ID) {
   characters {
     id
     name
     status
     species
     gender
     image
   }
 }
`;


export const GET_CHARACTERS = gql`
 query Characters(
   $status: String
   $species: String
   $gender: String
 ) {
   characters(
     status: $status
     species: $species
     gender: $gender
   ) {
     id
     name
     species
     image
     favorite
   }
 }
`;

export const GET_COMMENTS = gql`
 query Comments($characterId: ID!) {
   comments(characterId: $characterId) {
     id
     text
   }
 }
`;
