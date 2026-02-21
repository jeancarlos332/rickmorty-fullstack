
import axios from "axios";
import { Character } from "../models/Character";
import { sequelize } from "../config/database";

const seed = async () => {

  await sequelize.sync();

  const res = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );

  const characters = res.data.results.slice(0, 15);

  for (const c of characters) {

    await Character.create({
      name: c.name,
      status: c.status,
      species: c.species,
      gender: c.gender,
      origin: c.origin.name,
      image: c.image,
      favorite: false,
      deleted: false
    });

  }

  console.log("Seed complete");
};

seed();
