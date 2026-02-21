export const swaggerDocument = {
 openapi: "3.0.0",

 info: {
  title: "Rick and Morty API",
  version: "1.0.0",
  description: "GraphQL API for Rick and Morty characters"
 },

 servers: [
  {
   url: "http://localhost:4000",
   description: "Local server"
  }
 ],

 tags: [
  {
   name: "GraphQL",
   description: "GraphQL operations"
  }
 ],

 paths: {
  "/graphql": {
   post: {
    tags: ["GraphQL"],
    summary: "GraphQL endpoint",
    description: "Send GraphQL queries and mutations",

    requestBody: {
     required: true,
     content: {
      "application/json": {
       schema: {
        type: "object",
        properties: {
         query: {
          type: "string"
         },
         variables: {
          type: "object"
         }
        }
       },
       examples: {
        characters: {
         summary: "Get characters",
         value: {
          query: `
           query {
            characters {
             id
             name
             favorite
            }
           }
          `
         }
        },

        favorite: {
         summary: "Toggle favorite",
         value: {
          query: `
           mutation {
            favoriteCharacter(id:1){
             id
             favorite
            }
           }
          `
         }
        },

        comment: {
         summary: "Add comment",
         value: {
          query: `
           mutation {
            addComment(
             text:"Hello"
             characterId:1
            ){
             id
             text
            }
           }
          `
         }
        }

       }
      }
     }
    },

    responses: {
     "200": {
      description: "Successful response"
     }
    }

   }
  }
 }
};
