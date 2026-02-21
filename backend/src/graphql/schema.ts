import { buildSchema } from "graphql";

export const schema = buildSchema(`

type Character {
 id: ID!
 name: String
 status: String
 species: String
 gender: String
 origin: String
 image: String
 favorite: Boolean
 deleted: Boolean
}

type Comment {
 id: ID!
 text: String
 characterId: ID
 createdAt: String
}

type Query {

 characters(
   name: String
   status: String
   species: String
   gender: String
   origin: String
   sort: String
 ): [Character]

 character(id: ID!): Character

 comments(characterId: ID!): [Comment]

}

type Mutation {

 favoriteCharacter(id: ID!): Character

 addComment(
   text: String!
   characterId: ID!
 ): Comment

 softDeleteCharacter(id: ID!): Character

}

`);
