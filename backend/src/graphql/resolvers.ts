import { Character } from "../models/Character";
import { Comment } from "../models/Comment";

export const resolvers = {

  characters: async (args: any) => {

    const where: any = {
      deleted: false
    };

    if (args.name) where.name = args.name;
    if (args.status) where.status = args.status;
    if (args.species) where.species = args.species;
    if (args.gender) where.gender = args.gender;
    if (args.origin) where.origin = args.origin;

    return Character.findAll({
      where
    });
  },

  comments: async ({ characterId }: any) => {
    return Comment.findAll({
      where: { characterId }
    });
  },

  favoriteCharacter: async ({ id }: any) => {
    const char = await Character.findByPk(id);

    await char?.update({
      favorite: !char.getDataValue("favorite")
    });

    return char;
  },

  addComment: async ({ text, characterId }: any) => {
    return Comment.create({
      text,
      characterId
    });
  },

  softDeleteCharacter: async ({ id }: any) => {
    const char = await Character.findByPk(id);

    await char?.update({
      deleted: true
    });

    return char;
  }

};
