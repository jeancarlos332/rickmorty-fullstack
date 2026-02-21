import { gql } from "@apollo/client";

export const FAVORITE = gql`
 mutation Favorite($id: ID!) {
   favoriteCharacter(id: $id) {
     id
     favorite
   }
 }
`;

export const ADD_COMMENT = gql`
 mutation AddComment($text: String!, $characterId: ID!) {
   addComment(
     text: $text,
     characterId: $characterId
   ) {
     id
     text
   }
 }
`;
